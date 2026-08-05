/* =========================================================================
   AR 貓頭鷹導覽 — Demo Mode (no camera required)
   ------------------------------------------------------------------------
   This file renders the AR *content* — the part that would appear once a
   phone camera recognises the interpretive panel. See the chat writeup for
   how this connects to the real camera-based MindAR implementation.
   ========================================================================= */

const ASSET_CDN_VERSION = 'ea24bee7f6969593b5ef7340186f3108752a05f7';
const ASSET_CDN = `https://cdn.jsdelivr.net/gh/korykoryko66/bird@${ASSET_CDN_VERSION}`;
const cdnAsset = path => `${ASSET_CDN}/${path.split('/').map(encodeURIComponent).join('/')}`;

const OWLS = {
  brown: {
    id:'brown', order:1,
    zh:'褐林鴞', en:'Brown Wood Owl', lat:'Strix leptogrammica',
    photo:'img/photo_1.jpg', poster:'img/poster_1.jpg', movie:cdnAsset('movie/褐林鴞.mp4'), model:cdnAsset('褐林鴞.glb'), fallbackModel:'褐林鴞.glb',
    colors:{ body:0x6b4a30, bodyDark:0x4a3320, belly:0xe3cda6, face:0xd8bd8d, eyes:0x120d08, beak:0x2b2018, perch:0x5b4530 },
    hasEarTufts:false,
    call:'hoot4',
    callNote:'鳴聲近似「呼—呼—呼—呼」，常在春季夜晚的山谷間回響。',
    captions:[
      ['臺灣體型最大的貓頭鷹之一，棲息在中高海拔山區完整林相中。','One of Taiwan\u2019s largest owls, living in well-preserved mid-to-high elevation forest.'],
      ['特別偏好飛鼠，繁殖期食物中約半數都是飛鼠。','It favours flying squirrels, which make up about half its chicks\u2019 diet.'],
      ['棲地消失與誤獵，讓牠的族群數量長期稀少。','Habitat loss and accidental hunting have kept its population persistently low.'],
      ['園區的這隻因長期遭非法飼養，喪失了野外生存能力。','This individual lost its ability to survive in the wild after prolonged illegal captivity.']
    ],
    hotspots:{
      face:{zh:'臉盤',en:'Facial Disc', tzh:'能像衛星天線一樣收集聲音，幫助牠在漆黑森林中精準定位飛鼠等獵物的方向與距離。', ten:'The facial disc works like a satellite dish, funnelling sound so it can pinpoint prey such as flying squirrels in total darkness.'},
      eyes:{zh:'眼睛',en:'Eyes', tzh:'大而深邃的眼睛能在極低光線下視物，牠們主要靠明暗反差與細微動態來鎖定獵物。', ten:'Large, dark eyes gather what little light exists at night — owls are especially attuned to contrast and movement.'},
      wings:{zh:'翅膀',en:'Wings', tzh:'羽毛前緣呈細鋸齒狀，能打散氣流、消除拍翅聲，讓牠幾乎無聲地接近獵物。', ten:'Serrated leading-edge feathers break up turbulent airflow, letting it glide almost silently toward prey.'},
      feet:{zh:'腳爪',en:'Talons', tzh:'強而有力的對握式腳趾能牢牢鎖住飛鼠，即使在樹枝間穿梭獵捕也不易脫手。', ten:'Powerful, reversible talons lock firmly onto prey — even while maneuvering fast through branches.'}
    }
  },
  collared: {
    id:'collared', order:2,
    zh:'領角鴞', en:'Collared Scops Owl', lat:'Otus lettia',
    photo:'img/photo_2.jpg', poster:'img/poster_2.jpg', movie:cdnAsset('movie/領⾓鴞.mp4'), model:cdnAsset('領⾓鴞.glb'), fallbackModel:'領⾓鴞.glb',
    colors:{ body:0x7c7264, bodyDark:0x584f43, belly:0xcfc6b0, face:0xa79a80, eyes:0xc98a1f, beak:0x2b2018, perch:0x5b4530 },
    hasEarTufts:true,
    call:'trill',
    callNote:'叫聲短促而顫抖，常於都市與山林間的夜晚傳出。',
    captions:[
      ['臺灣分布最廣、也最常見的貓頭鷹，山區、都市、海邊防風林都有牠的蹤跡。','Taiwan\u2019s most widespread owl — found in mountains, cities, and coastal windbreaks alike.'],
      ['頭頂那對「角羽」其實是裝飾用羽毛，能讓牠偽裝成枯枝。','The tufts on its head are decorative feathers that help it disguise as a broken branch.'],
      ['食性相當廣泛，蚯蚓、昆蟲、蛙類到鼠類都吃。','Its diet is remarkably broad — earthworms, insects, frogs, and rodents are all on the menu.'],
      ['都會區個體常在排油煙機口、冷氣窗台繁殖，容易導致幼鳥掉落。','Urban owls sometimes nest in exhaust vents or window ledges, which can cause chicks to fall.']
    ],
    hotspots:{
      face:{zh:'臉盤',en:'Facial Disc', tzh:'臉盤邊緣的硬羽能像漏斗般把聲音導向耳朵，是牠在都市與山林間定位獵物的利器。', ten:'Stiff feathers rim the facial disc, funnelling sound toward the ears — essential for hunting in both cities and forest.'},
      eyes:{zh:'眼睛',en:'Eyes', tzh:'橘黃色的眼睛在夜間格外醒目，瞳孔能大幅放大以吸收微弱光線。', ten:'Bright orange-yellow eyes with pupils that dilate widely to gather faint light.'},
      wings:{zh:'角羽與翅膀',en:'Ear Tufts & Wings', tzh:'頭頂那對「角羽」不是耳朵，而是偽裝用的裝飾羽，能讓靜止不動的牠看起來像枯枝。', ten:'The head tufts aren\u2019t ears at all — they\u2019re decorative feathers that help it pass for a broken branch when still.'},
      feet:{zh:'腳爪',en:'Talons', tzh:'食性廣泛的牠，腳爪需同時應付蚯蚓、昆蟲到小型鼠類等各種獵物，抓握力十分全能。', ten:'With such a varied diet, its talons are all-purpose tools for grabbing everything from earthworms to small rodents.'}
    }
  },
  barn: {
    id:'barn', order:3,
    zh:'倉鴞', en:'Barn Owl', lat:'Tyto alba',
    photo:'img/photo_3.jpg', poster:'img/poster_3.jpg', movie:cdnAsset('movie/倉鴞.mp4'), model:cdnAsset('倉鴞.glb'), fallbackModel:'倉鴞.glb',
    colors:{ body:0xcaa562, bodyDark:0x8a6a3c, belly:0xf3ead0, face:0xf1e6c8, eyes:0x1a1310, beak:0x352818, perch:0x5b4530 },
    hasEarTufts:false,
    call:'screech',
    callNote:'倉鴞不會「呼—呼」叫，而是發出淒厲的尖嘯聲。',
    captions:[
      ['分布幾乎遍及全球，但臺灣野外並無分布，園區個體屬於外來收容。','Found almost worldwide, but not naturally in Taiwan — this individual came from an illegal-pet rescue.'],
      ['外表可愛常遭非法引進飼養，但猛禽有特殊營養與活動量需求。','Its cute look leads to illegal pet-keeping, but as a raptor it has demanding nutritional and activity needs.'],
      ['與臺灣的草鴞同科，但倉鴞偏好在樹洞、穀倉或人工建物內繁殖。','A relative of Taiwan\u2019s Grass Owl, but Barn Owls prefer nesting in tree hollows, barns, or man-made structures.'],
      ['2021年由鳥友於臺北大安森林公園發現時，牠虛弱不堪、毫無反抗能力。','Found weak and unable to resist capture at Daan Forest Park, Taipei, in February 2021.']
    ],
    hotspots:{
      face:{zh:'心型臉盤',en:'Heart-shaped Face', tzh:'招牌的心型臉盤是貓頭鷹中最精準的「聲音雷達」之一，能分辨獵物前後左右的細微差異。', ten:'Its signature heart-shaped face is one of the most precise sound radars among owls, detecting tiny differences in prey position.'},
      eyes:{zh:'眼睛',en:'Eyes', tzh:'相對其他貓頭鷹，倉鴞眼睛偏小，因為牠更依賴聽覺而非視覺來獵食。', ten:'Barn Owls have relatively small eyes for an owl — hearing matters more than sight when hunting.'},
      wings:{zh:'翅膀',en:'Wings', tzh:'寬大柔軟的翅膀讓牠能低空慢速滑翔，安靜地掃視穀倉、草地尋找獵物。', ten:'Broad, soft wings let it glide slowly and silently low over barns and fields while scanning for prey.'},
      feet:{zh:'腳爪',en:'Talons', tzh:'細長的腳爪能伸進草叢或縫隙間，精準夾取小型囓齒類獵物。', ten:'Long, slender talons can reach into grass or gaps to precisely snatch small rodents.'}
    }
  },
  shorteared: {
    id:'shorteared', order:4,
    zh:'短耳鴞', en:'Short-eared Owl', lat:'Asio flammeus',
    photo:'img/photo_4.jpg', poster:'img/poster_4.jpg', movie:cdnAsset('movie/短耳鴞.mp4'), model:cdnAsset('短耳鴞.glb'), fallbackModel:'短耳鴞.glb',
    colors:{ body:0x8a6b3f, bodyDark:0x5c4527, belly:0xdcc79a, face:0xc7ac78, eyes:0xf0c23e, beak:0x2b2018, perch:0x5b4530 },
    hasEarTufts:false,
    call:'softhoot',
    callNote:'柔和低沉的鳴聲，度冬期間偶爾於空曠草地傳出。',
    captions:[
      ['臺灣12種貓頭鷹之一，是不普遍的冬候鳥。','One of Taiwan\u2019s 12 owl species, and an uncommon winter visitor.'],
      ['根據衛星追蹤，牠們最遠可能來自東俄羅斯、甚至極圈地區。','Satellite tracking shows some individuals travel here from as far as eastern Russia — even the Arctic Circle.'],
      ['全球農地與平原減少，讓曾經普遍的牠正快速減少中。','Global farmland decline and plains development are driving a rapid decrease in its population.'],
      ['園區這隻因誤觸鳥網、翅膀受損，已無法遷徙返回繁殖地。','This individual\u2019s wing was injured in a bird net, leaving it unable to migrate back to breed.']
    ],
    hotspots:{
      face:{zh:'臉盤',en:'Facial Disc', tzh:'相對不明顯的臉盤，反映出牠白天也會活動、不完全依賴聽覺定位獵物。', ten:'A less pronounced facial disc reflects its partly diurnal habits — it relies a little less on hearing alone.'},
      eyes:{zh:'眼睛',en:'Eyes', tzh:'明黃色的眼睛，是牠與大多數暗眼貓頭鷹最明顯的外觀差異之一。', ten:'Bright yellow eyes are one of the clearest visual differences from most dark-eyed owl species.'},
      wings:{zh:'翅膀',en:'Wings', tzh:'狹長的翅膀適合長距離遷徙，也讓牠能在草原上低空盤旋、突襲獵物。', ten:'Long, narrow wings suit long-distance migration and let it hover low over grassland before striking.'},
      feet:{zh:'腳爪',en:'Talons', tzh:'腳爪覆有濃密羽毛，兼具保暖與抓握囓齒類獵物的雙重功能。', ten:'Feather-covered talons provide both insulation and a strong grip for catching rodents.'}
    }
  }
};

const OWL_PROFILES = {
  brown:{
    overview:{
      zh:'褐林鴞是鴟鴞科林鴞屬的中大型夜行性猛禽，分布於南亞至東亞，也見於臺灣，白天多藏身在茂密森林中。',
      en:'The Brown Wood Owl is a medium-large, highly nocturnal owl of the family Strigidae. It ranges from South to East Asia, including Taiwan, and usually shelters in dense forest by day.'
    },
    facts:[
      {labelZh:'中英文稱呼',labelEn:'Common names',zh:'褐林鴞',en:'Brown Wood Owl'},
      {labelZh:'體型',labelEn:'Body size',zh:'全長約 45–57 公分',en:'Body length: about 45–57 cm'},
      {labelZh:'體重',labelEn:'Weight',zh:'約 950–1,100 公克；不同亞種可能有差異',en:'About 950–1,100 g; weight can vary among subspecies'},
      {labelZh:'居住地',labelEn:'Habitat & range',zh:'印度、孟加拉、斯里蘭卡、臺灣、印尼及中國南部的茂密森林、熱帶森林與山地林。',en:'Dense, tropical, and montane forests from India, Bangladesh, and Sri Lanka to Taiwan, Indonesia, and southern China.'},
      {labelZh:'外觀型態',labelEn:'Appearance',zh:'上體深褐色，肩部有淡白斑；下體淡黃並帶褐色縱紋。褐紅色面盤有白邊，眼睛深褐，頸部有白色環帶。',en:'Uniformly dark-brown upperparts with faint white shoulder spots; buff underparts with brown streaks; a brown to rufous facial disc edged in white, dark-brown eyes, and a white neckband.'},
      {labelZh:'食性',labelEn:'Diet',zh:'主要捕食小型哺乳類、鳥類與爬行類。',en:'Feeds mainly on small mammals, birds, and reptiles.'}
    ],
    sources:[
      {label:'中文 Wikipedia',url:'https://zh.wikipedia.org/wiki/%E8%A4%90%E6%9E%97%E9%B4%9E'},
      {label:'English Wikipedia',url:'https://en.wikipedia.org/wiki/Brown_wood_owl'},
      {label:'體重資料 · Wikipedia IT',url:'https://it.wikipedia.org/wiki/Strix_leptogrammica'}
    ]
  },
  collared:{
    overview:{
      zh:'領角鴞是角鴞屬的小型夜行性貓頭鷹，分布於南亞與東亞，也生活在臺灣；牠適應力強，森林、果園、公園與城市綠地都可能見到。',
      en:'The Collared Scops Owl is a small nocturnal owl of South and East Asia, including Taiwan. It adapts well to forests, orchards, parks, and wooded urban areas.'
    },
    facts:[
      {labelZh:'中英文稱呼',labelEn:'Common names',zh:'領角鴞',en:'Collared Scops Owl'},
      {labelZh:'體型',labelEn:'Body size',zh:'全長約 23–25 公分',en:'Body length: about 23–25 cm'},
      {labelZh:'體重',labelEn:'Weight',zh:'約 100–170 公克；雌鳥通常較大',en:'About 100–170 g; females are generally larger'},
      {labelZh:'居住地',labelEn:'Habitat & range',zh:'喜馬拉雅山區至中國南部、臺灣及東南亞的森林、次生林、竹林，也會出現在聚落與城市綠地。',en:'Forests, secondary woodland, bamboo, settlements, and urban green spaces from the Himalayas to southern China, Taiwan, and Southeast Asia.'},
      {labelZh:'外觀型態',labelEn:'Appearance',zh:'頭頂有短角羽；上體灰褐或紅褐並帶淡黃斑點，下體淡黃且有細深色縱紋。面盤白或淡黃，眼睛橙色至褐色，頸後有淡色環帶。',en:'Short ear tufts; grey-brown or rufous upperparts with buff spots; buff underparts with fine dark streaks; a whitish or buff facial disc, orange to brown eyes, and a pale collar.'},
      {labelZh:'食性',labelEn:'Diet',zh:'以昆蟲為主，也吃蜥蜴、老鼠及小型鳥類。',en:'Feeds mainly on insects, with lizards, mice, and small birds also taken.'}
    ],
    sources:[
      {label:'中文 Wikipedia',url:'https://zh.wikipedia.org/wiki/%E9%A0%98%E8%A7%92%E9%B4%9E'},
      {label:'English Wikipedia',url:'https://en.wikipedia.org/wiki/Collared_scops_owl'},
      {label:'體重資料 · Wikipedia DE',url:'https://de.wikipedia.org/wiki/Halsband-Zwergohreule'}
    ]
  },
  barn:{
    overview:{
      zh:'倉鴞是草鴞科的中型貓頭鷹，以淺色羽毛、心形面盤和安靜飛行聞名，常在開闊農地與草地低空搜尋獵物。',
      en:'The Barn Owl is a medium-sized owl of the family Tytonidae, known for its pale plumage, heart-shaped face, and silent flight over open farmland and grassland.'
    },
    facts:[
      {labelZh:'中英文稱呼',labelEn:'Common names',zh:'倉鴞／西方倉鴞',en:'Barn Owl / Western Barn Owl'},
      {labelZh:'體型',labelEn:'Body size',zh:'全長約 33–35 公分；翼展約 80–95 公分',en:'Body length: about 33–35 cm; wingspan: about 80–95 cm'},
      {labelZh:'體重',labelEn:'Weight',zh:'約 240–480 公克；依亞種與性別而異',en:'About 240–480 g, varying by subspecies and sex'},
      {labelZh:'居住地',labelEn:'Habitat & range',zh:'歐洲、西南亞與非洲的農地、草地等開闊環境，附近通常有林帶、樹洞、穀倉或廢棄建築可供棲息。',en:'Open farmland and grassland across Europe, southwestern Asia, and Africa, usually near woodland, tree hollows, barns, or unused buildings.'},
      {labelZh:'外觀型態',labelEn:'Appearance',zh:'長翼、短方尾；頭背部呈灰褐或淡褐斑駁色，下體白至黃褐。心形淺色面盤與黑色眼睛是最明顯的特徵。',en:'Long wings and a short square tail; mottled grey-brown to buff upperparts, white to buff underparts, and a distinctive pale heart-shaped face with black eyes.'},
      {labelZh:'食性',labelEn:'Diet',zh:'以田鼠、鼩鼱、老鼠等小型哺乳類為主，也會捕食鳥類、蝙蝠、蜥蜴、兩棲類及昆蟲。',en:'Feeds mainly on small mammals such as voles, shrews, mice, and rats, with birds, bats, lizards, amphibians, and insects also taken.'}
    ],
    sources:[
      {label:'中文 Wikipedia',url:'https://zh.wikipedia.org/wiki/%E8%A5%BF%E4%BB%93%E9%B8%AE'},
      {label:'English Wikipedia',url:'https://en.wikipedia.org/wiki/Western_barn_owl'}
    ]
  },
  shorteared:{
    overview:{
      zh:'短耳鴞是分布廣泛的中型草原貓頭鷹，常在晨昏或白天貼近地面飛行獵食；牠具有遷徙性，在臺灣屬不普遍的冬候鳥。',
      en:'The Short-eared Owl is a widespread, medium-sized grassland owl. It often hunts low over open ground by day or at dusk and is partly migratory.'
    },
    facts:[
      {labelZh:'中英文稱呼',labelEn:'Common names',zh:'短耳鴞',en:'Short-eared Owl'},
      {labelZh:'體型',labelEn:'Body size',zh:'全長約 34–43 公分；翼展約 85–110 公分',en:'Body length: about 34–43 cm; wingspan: about 85–110 cm'},
      {labelZh:'體重',labelEn:'Weight',zh:'約 206–475 公克；雌鳥通常稍大',en:'About 206–475 g; females are usually slightly larger'},
      {labelZh:'居住地',labelEn:'Habitat & range',zh:'除南極洲與澳洲外廣泛分布，偏好草地、農地、草原、凍原、稀樹草原與濕地周邊等開闊環境。',en:'Widely distributed on every continent except Antarctica and Australia, favouring open grassland, farmland, prairie, tundra, savanna, and wetland edges.'},
      {labelZh:'外觀型態',labelEn:'Appearance',zh:'大頭、短頸、寬翼；羽色為斑駁黃褐至棕色，翅與尾有橫斑。黃橙色眼睛周圍有黑色眼圈，耳羽很短，平時不明顯。',en:'A large head, short neck, and broad wings; mottled tawny-brown plumage with barred wings and tail; yellow-orange eyes ringed in black, and very short ear tufts that are usually hidden.'},
      {labelZh:'食性',labelEn:'Diet',zh:'主要吃鼠類，尤其偏好田鼠；也會捕食兔、鼩鼱、蝙蝠、小型鳥類與昆蟲。',en:'Feeds mainly on rodents, especially voles, and also takes rabbits, shrews, bats, small birds, and insects.'}
    ],
    sources:[
      {label:'中文 Wikipedia',url:'https://zh.wikipedia.org/wiki/%E7%9F%AD%E8%80%B3%E9%B8%AE'},
      {label:'English Wikipedia',url:'https://en.wikipedia.org/wiki/Short-eared_owl'}
    ]
  }
};
const OWL_ORDER = ['brown','collared','barn','shorteared'];

/* ---------------------------------------------------------------------- */
/* UI wiring                                                              */
/* ---------------------------------------------------------------------- */
const screens = {
  start: document.getElementById('screen-start'),
  scan: document.getElementById('screen-scan'),
  stage: document.getElementById('screen-stage'),
};
function showScreen(name){
  Object.values(screens).forEach(s=>s.classList.remove('active'));
  screens[name].classList.add('active');
  document.getElementById('backBtn').classList.toggle('show', name!=='start');
}

function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.add('show');
  clearTimeout(toast._h);
  toast._h=setTimeout(()=>t.classList.remove('show'),2200);
}

// Build start grid
const grid=document.getElementById('ownGrid');
OWL_ORDER.forEach(key=>{
  const o=OWLS[key];
  const card=document.createElement('button');
  card.className='owlcard';
  card.innerHTML=`<img class="ph" src="${o.photo}"><div class="cap">
      <p class="zh">${o.zh}</p><p class="en">${o.en}</p><p class="lat">${o.lat}</p></div>`;
  card.onclick=()=>startScan(key);
  grid.appendChild(card);
});

let currentOwl=null;
let scanTimer=null;

const previewOverlay=document.getElementById('previewOverlay');
const previewVideo=document.getElementById('previewVideo');
const previewSkip=document.getElementById('previewSkip');
const previewStatus=document.getElementById('previewStatus');
let previewRunId=0;
let finishCurrentPreview=null;

function hidePreview(){
  previewOverlay.classList.remove('show');
  previewOverlay.setAttribute('aria-hidden','true');
  previewVideo.pause();
}

function cancelPreview(){
  if(finishCurrentPreview) finishCurrentPreview('cancel');
  finishCurrentPreview=null;
  previewRunId++;
  hidePreview();
}

function playPreview(owl){
  cancelPreview();
  const runId=++previewRunId;
  previewVideo.src=new URL(owl.movie,window.location.href).href;
  previewVideo.poster=owl.poster;
  previewVideo.currentTime=0;
  document.getElementById('previewTitle').textContent=owl.zh+' · '+owl.en;
  previewStatus.textContent='影片預覽 · 3D 模型同步載入中';
  previewSkip.disabled=false;
  previewSkip.textContent='略過影片 Skip';
  previewOverlay.classList.add('show');
  previewOverlay.setAttribute('aria-hidden','false');

  return new Promise(resolve=>{
    let finished=false;
    const finish=reason=>{
      if(finished || runId!==previewRunId) return;
      finished=true;
      previewSkip.disabled=true;
      previewSkip.textContent='正在準備 3D…';
      previewStatus.textContent=reason==='ended'
        ? '影片播放完成 · 正在準備 3D 模型'
        : '正在準備 3D 模型…';
      finishCurrentPreview=null;
      resolve(reason);
    };
    finishCurrentPreview=finish;
    previewVideo.onended=()=>finish('ended');
    previewVideo.onerror=()=>finish('error');
    previewSkip.onclick=()=>finish('skip');
    const playPromise=previewVideo.play();
    if(playPromise) playPromise.catch(()=>finish('error'));
  });
}

function returnToStart(){
  clearTimeout(scanTimer);
  scanTimer=null;
  cancelPreview();
  closeSpeciesProfile();
  stopIntroTimers();
  modelLoadId++;
  currentOwl=null;
  showScreen('start');
}

document.getElementById('backBtn').onclick=returnToStart;

function startScan(key){
  clearTimeout(scanTimer);
  cancelPreview();
  currentOwl=OWLS[key];
  document.getElementById('scanImg').src=currentOwl.poster;
  document.getElementById('scanName').textContent=currentOwl.zh;
  showScreen('scan');
  scanTimer=setTimeout(()=>enterStage(currentOwl),1650);
}

document.getElementById('anotherBtn').onclick=returnToStart;

/* ---------------------------------------------------------------------- */
/* Three.js owl scene                                                     */
/* ---------------------------------------------------------------------- */
const canvas=document.getElementById('owlCanvas');
const renderer=new THREE.WebGLRenderer({canvas, antialias:true, alpha:true});
const gltfLoader=new THREE.GLTFLoader();
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(38, 1, 0.1, 100);
camera.position.set(0,0.9,6.2);
camera.lookAt(0,0.6,0);

const hemi=new THREE.HemisphereLight(0xfff3d6, 0x1a1508, 0.65);
scene.add(hemi);
const key1=new THREE.DirectionalLight(0xffe4ae, 1.05);
key1.position.set(3,5,4);
scene.add(key1);
const rim=new THREE.DirectionalLight(0x8fb0ff, 0.35);
rim.position.set(-4,2,-3);
scene.add(rim);

function resizeRenderer(){
  const wrap=document.getElementById('canvas-wrap');
  const w=wrap.clientWidth, h=wrap.clientHeight;
  renderer.setSize(w,h,false);
  camera.aspect=w/Math.max(h,1);
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resizeRenderer);

/* ---- procedural owl builder ---- */
function buildOwl(colors, hasEarTufts){
  const root=new THREE.Group();

  const mat=(hex, rough=0.85, metal=0.02)=>new THREE.MeshStandardMaterial({color:hex, roughness:rough, metalness:metal});

  // perch
  const perch=new THREE.Mesh(new THREE.CylinderGeometry(0.11,0.13,2.6,10), mat(colors.perch,0.95));
  perch.rotation.z=Math.PI/2; perch.position.y=-1.35;
  root.add(perch);

  // legs group (feet hotspot)
  const feet=new THREE.Group();
  [-0.26,0.26].forEach(x=>{
    const leg=new THREE.Mesh(new THREE.CylinderGeometry(0.045,0.055,0.34,8), mat(colors.beak,0.7));
    leg.position.set(x,-1.05,0.05);
    feet.add(leg);
    for(let i=-1;i<=1;i++){
      const toe=new THREE.Mesh(new THREE.ConeGeometry(0.035,0.22,6), mat(colors.beak,0.7));
      toe.rotation.x=Math.PI/2.1;
      toe.position.set(x+i*0.09, -1.2, 0.16+Math.abs(i)*0.02);
      feet.add(toe);
    }
  });
  feet.userData.hotspot='feet';
  root.add(feet);

  // body
  const bodyGroup=new THREE.Group();
  const body=new THREE.Mesh(new THREE.SphereGeometry(1,28,22), mat(colors.body));
  body.scale.set(0.92,1.22,0.86);
  body.position.y=-0.15;
  bodyGroup.add(body);
  const belly=new THREE.Mesh(new THREE.SphereGeometry(1,24,18), mat(colors.belly,0.9));
  belly.scale.set(0.56,0.82,0.34);
  belly.position.set(0,-0.28,0.66);
  bodyGroup.add(belly);
  const tail=new THREE.Mesh(new THREE.BoxGeometry(0.55,0.55,0.14), mat(colors.bodyDark));
  tail.position.set(0,-1.05,-0.55);
  tail.rotation.x=0.35;
  bodyGroup.add(tail);
  root.add(bodyGroup);

  // head + face (face hotspot) + eyes (eyes hotspot)
  const head=new THREE.Group();
  head.position.set(0,1.02,0.06);
  const skull=new THREE.Mesh(new THREE.SphereGeometry(0.74,26,20), mat(colors.bodyDark));
  head.add(skull);

  const face=new THREE.Group();
  face.userData.hotspot='face';
  const faceDisc=new THREE.Mesh(new THREE.CylinderGeometry(0.62,0.62,0.1,32), mat(colors.face,0.95));
  faceDisc.rotation.x=Math.PI/2;
  faceDisc.position.z=0.42;
  face.add(faceDisc);
  const beak=new THREE.Mesh(new THREE.ConeGeometry(0.09,0.26,10), mat(colors.beak,0.5,0.15));
  beak.rotation.x=Math.PI/1.55;
  beak.position.set(0,-0.12,0.72);
  face.add(beak);
  head.add(face);

  const eyes=new THREE.Group();
  eyes.userData.hotspot='eyes';
  [-0.24,0.24].forEach(x=>{
    const socket=new THREE.Mesh(new THREE.SphereGeometry(0.175,16,16), mat(0x090705,0.4));
    socket.position.set(x,0.09,0.62);
    eyes.add(socket);
    const glint=new THREE.Mesh(new THREE.SphereGeometry(0.05,10,10), new THREE.MeshStandardMaterial({color:colors.eyes, emissive:colors.eyes, emissiveIntensity:0.9, roughness:0.3}));
    glint.position.set(x-0.05,0.15,0.75);
    eyes.add(glint);
  });
  head.add(eyes);

  if(hasEarTufts){
    [-0.32,0.32].forEach(x=>{
      const tuft=new THREE.Mesh(new THREE.ConeGeometry(0.09,0.42,8), mat(colors.bodyDark));
      tuft.position.set(x,0.72,0.05);
      tuft.rotation.z = x<0?0.28:-0.28;
      tuft.rotation.x = -0.15;
      head.add(tuft);
    });
  }
  root.add(head);

  // wings (wings hotspot)
  const wings=new THREE.Group();
  wings.userData.hotspot='wings';
  const wingPivots=[];
  [-1,1].forEach(side=>{
    const pivot=new THREE.Group();
    pivot.position.set(0.72*side, 0.35, -0.05);
    const wing=new THREE.Mesh(new THREE.SphereGeometry(0.55,18,14), mat(colors.bodyDark,0.9));
    wing.scale.set(0.32,1.05,0.5);
    wing.position.set(0.28*side,-0.42,0);
    wing.rotation.z = side*0.32;
    pivot.add(wing);
    wings.add(pivot);
    wingPivots.push(pivot);
  });
  root.add(wings);

  root.scale.setScalar(0.001);
  root.position.y=2.4;

  return {root, parts:{feet, body:bodyGroup, head, face, eyes, wings, wingPivots}};
}

let owlObj=null;
let modelLoadId=0;
const MODEL_REST_Y=-0.55;
const MODEL_DROP_HEIGHT=2.4;

function loadOwlModel(owl){
  const loadId=++modelLoadId;
  if(owlObj){ scene.remove(owlObj.root); }
  owlObj=null;
  enableZoomControls(false);

  const modelCandidates=[owl.model, owl.fallbackModel].filter(Boolean);

  return new Promise(resolve=>{
    function loadCandidate(candidateIndex){
      // A full URL safely encodes the Chinese filenames when the browser requests them.
      const modelUrl=new URL(modelCandidates[candidateIndex], window.location.href).href;
      gltfLoader.load(modelUrl, gltf=>{
        if(loadId!==modelLoadId){ resolve(false); return; }

        const root=new THREE.Group();
        const model=gltf.scene;
        root.add(model);

        // Centre and scale every source model to the same on-screen presentation.
        const box=new THREE.Box3().setFromObject(model);
        const size=box.getSize(new THREE.Vector3());
        const center=box.getCenter(new THREE.Vector3());
        const largestSide=Math.max(size.x,size.y,size.z,0.01);
        model.position.sub(center);
        model.scale.setScalar(3.15/largestSide);

        root.scale.setScalar(0.001);
        root.position.y=MODEL_REST_Y+MODEL_DROP_HEIGHT;
        owlObj={
          root,
          parts:{ feet:null, body:null, head:null, face:null, eyes:null, wings:null, wingPivots:[] }
        };
        scene.add(root);
        enableZoomControls(true);
        resolve(true);
      }, event=>{
        if(loadId!==modelLoadId) return;
        const percent=event.total ? Math.round(event.loaded/event.total*100) : null;
        showModelLoading(percent);
      }, ()=>{
        if(loadId!==modelLoadId){ resolve(false); return; }
        if(candidateIndex+1<modelCandidates.length){
          showModelLoading(null);
          loadCandidate(candidateIndex+1);
        } else {
          showModelLoadError();
          toast('模型載入失敗，請確認網站上的 GLB 檔案名稱。');
          resolve(false);
        }
      });
    }

    loadCandidate(0);
  });
}

/* ---- easing ---- */
function easeOutCubic(t){return 1-Math.pow(1-t,3);}
function easeOutBack(t){const c1=1.7,c3=c1+1; return 1+c3*Math.pow(t-1,3)+c1*Math.pow(t-1,2);}
function easeInOutSine(t){return -(Math.cos(Math.PI*t)-1)/2;}
function clamp01(t){return Math.max(0,Math.min(1,t));}

/* ---- intro timeline (5s) ---- */
const TIMELINE_MS=5000;
let introStart=0, introRunning=false, interactive=false, rafId=null;
let userRotY=0, userScale=1, blinkPhaseDone=[false,false];
let introTimers=[];

function stopIntroTimers(){
  introTimers.forEach(t=>clearTimeout(t));
  introTimers=[];
  introRunning=false;
  interactive=false;
  if(rafId) cancelAnimationFrame(rafId);
}

function setCaption(i, owl){
  const el=document.getElementById('captionChip');
  const c=owl.captions[i % owl.captions.length];
  el.innerHTML=`${c[0]}<br><b>${c[1]}</b>`;
  el.classList.add('show');
}
function clearCaption(){ document.getElementById('captionChip').classList.remove('show'); }

function showModelLoading(percent){
  const hasPercent=Number.isFinite(percent);
  const value=hasPercent ? Math.max(0,Math.min(100,percent)) : 0;
  document.getElementById('progressFill').style.width=value+'%';
  document.getElementById('progressTxt').textContent=hasPercent
    ? `正在下載 3D 模型 ${value}% · Loading model`
    : '正在下載 3D 模型 · Loading model';
  const caption=document.getElementById('captionChip');
  caption.innerHTML=hasPercent
    ? `正在下載貓頭鷹模型 ${value}%<br><b>Loading 3D owl model</b>`
    : '正在下載貓頭鷹模型…<br><b>Loading 3D owl model</b>';
  caption.classList.add('show');
}

function showModelLoadError(){
  document.getElementById('progressTxt').textContent='模型載入失敗 · Model failed to load';
  const caption=document.getElementById('captionChip');
  caption.innerHTML='模型載入失敗，請重新整理後再試。<br><b>Model failed to load. Please refresh.</b>';
  caption.classList.add('show');
}

async function enterStage(owl){
  scanTimer=null;
  showScreen('stage');
  document.getElementById('stageZh').textContent=owl.zh;
  document.getElementById('stageLat').textContent=owl.lat+' · '+owl.en;
  userScale=1;
  updateZoomLabel();
  stopIntroTimers();
  setProfileButtonEnabled(false);
  showModelLoading(null);
  resizeRenderer();
  const previewPromise=playPreview(owl);
  const modelPromise=loadOwlModel(owl);
  const [,loaded]=await Promise.all([previewPromise,modelPromise]);
  if(currentOwl!==owl) return;
  hidePreview();
  if(!loaded) return;
  runIntro(owl);
}

document.getElementById('replayBtn').onclick=()=>{ if(currentOwl) runIntro(currentOwl); };

function runIntro(owl){
  stopIntroTimers();
  clearCaption();
  document.getElementById('hintChip').classList.remove('show');
  closeSpeciesProfile();
  userRotY=0; blinkPhaseDone=[false,false];
  introRunning=true; interactive=false;
  introStart=performance.now();

  const el=document.getElementById('progressFill');
  const txt=document.getElementById('progressTxt');

  // caption schedule
  [0,1650,3300].forEach((delay,i)=>{
    introTimers.push(setTimeout(()=>setCaption(i,owl), delay));
  });
  introTimers.push(setTimeout(clearCaption, TIMELINE_MS-300));
  introTimers.push(setTimeout(()=>{
    document.getElementById('hintChip').classList.add('show');
  }, TIMELINE_MS-1600));
  introTimers.push(setTimeout(()=>{
    interactive=true;
    setProfileButtonEnabled(true);
  }, TIMELINE_MS));

  function frame(now){
    const t = now - introStart;
    animateOwl(t, owl);
    const pct=clamp01(t/TIMELINE_MS);
    el.style.width=(pct*100)+'%';
    const sec=Math.min(5, (t/1000));
    txt.textContent = t<TIMELINE_MS
      ? `導覽動畫播放中 0:${String(Math.floor(sec)).padStart(2,'0')} / 0:05`
      : `導覽完成 · 可自由旋轉與探索 Ready to explore`;
    renderer.render(scene,camera);
    if(t<TIMELINE_MS || true){ rafId=requestAnimationFrame(frame); }
  }
  rafId=requestAnimationFrame(frame);
}

function animateOwl(t, owl){
  if(!owlObj) return;
  const {root, parts} = owlObj;

  // phase A 0-350: scale + fly down
  const aT=clamp01(t/350);
  const scale=easeOutBack(aT);
  root.scale.setScalar(Math.max(scale,0.001)*userScale);
  const bT=clamp01(t/475);
  root.position.y = MODEL_REST_Y + MODEL_DROP_HEIGHT - easeOutCubic(bT)*MODEL_DROP_HEIGHT;

  // phase B 350-675 wing flutter (landing)
  flapWings(parts, t, 350, 675, 1);

  // phase C 650-2500: one full spin
  if(t<2500){
    const cT=clamp01((t-650)/1850);
    root.rotation.y = easeInOutSine(cT)*Math.PI*2;
  } else if (!interactive) {
    root.rotation.y = 0 + userRotY;
  }

  // phase D 2500-3700: head turn + blinks
  if(t>=2500 && t<3700){
    const dT=(t-2500)/1200;
    const turn=Math.sin(dT*Math.PI*1.5)*0.5;
    if(parts.head) parts.head.rotation.y=turn;
  } else if(t>=3700){
    if(parts.head) parts.head.rotation.y*=0.9;
  }
  blink(parts, t, 2850, 0);
  blink(parts, t, 3450, 1);

  // phase E 3700-4700: two flaps
  flapWings(parts, t, 3750, 4050, 1);
  flapWings(parts, t, 4350, 4650, 1);

  // idle after intro
  if(t>=TIMELINE_MS){
    const idleT=(t-TIMELINE_MS)/1000;
    root.position.y = MODEL_REST_Y + Math.sin(idleT*1.1)*0.035;
    if(interactive){
      root.rotation.y = userRotY;
    }
    if(Math.floor(idleT)%5===0){
      const ph=(idleT%5);
      if(ph<0.16){ setEyeScale(parts, 1-Math.sin(ph/0.16*Math.PI)*0.85); }
      else setEyeScale(parts,1);
    } else setEyeScale(parts,1);
  }
}

function flapWings(parts,t,start,end,amount){
  if(t<start||t>end) return;
  const p=(t-start)/(end-start);
  const wave=Math.sin(p*Math.PI)*amount;
  parts.wingPivots.forEach((pivot,i)=>{
    pivot.rotation.z = (i===0? -1:1)*wave*0.9;
  });
}
function blink(parts,t,at,which){
  const win=180;
  if(t<at-win||t>at+win) return;
  const p=1-Math.abs(t-at)/win;
  setEyeScale(parts, 1-p*0.85);
}
function setEyeScale(parts, s){
  if(parts.eyes) parts.eyes.scale.y = s;
}

/* ---- pointer interaction: drag, pinch/wheel zoom, and tap hotspots ---- */
const MIN_MODEL_SCALE=0.55;
const MAX_MODEL_SCALE=1.65;
let pStart=null, pMoved=false, primaryPointerId=null;
let pinchStartDistance=0, pinchStartScale=1;
const activePointers=new Map();

function clampModelScale(value){
  return Math.max(MIN_MODEL_SCALE,Math.min(MAX_MODEL_SCALE,value));
}
function updateZoomLabel(){
  const button=document.getElementById('zoomResetBtn');
  if(button) button.textContent=Math.round(userScale*100)+'%';
}
function setModelScale(value){
  userScale=clampModelScale(value);
  updateZoomLabel();
}
function enableZoomControls(enabled){
  ['zoomInBtn','zoomResetBtn','zoomOutBtn'].forEach(id=>{
    const button=document.getElementById(id);
    if(button) button.disabled=!enabled;
  });
}
function pointerDistance(){
  const points=[...activePointers.values()];
  if(points.length<2) return 0;
  return Math.hypot(points[0].x-points[1].x,points[0].y-points[1].y);
}

canvas.addEventListener('pointerdown',e=>{
  if(!owlObj) return;
  if(canvas.setPointerCapture) canvas.setPointerCapture(e.pointerId);
  activePointers.set(e.pointerId,{x:e.clientX,y:e.clientY});

  if(activePointers.size===1){
    primaryPointerId=e.pointerId;
    pStart={x:e.clientX,y:e.clientY,rot:userRotY};
    pMoved=false;
  } else if(activePointers.size===2){
    pinchStartDistance=pointerDistance();
    pinchStartScale=userScale;
    pMoved=true;
  }
});
canvas.addEventListener('pointermove',e=>{
  if(!activePointers.has(e.pointerId)) return;
  activePointers.set(e.pointerId,{x:e.clientX,y:e.clientY});

  if(activePointers.size>=2){
    const distance=pointerDistance();
    if(pinchStartDistance>0) setModelScale(pinchStartScale*distance/pinchStartDistance);
    pMoved=true;
    return;
  }

  if(!pStart || e.pointerId!==primaryPointerId) return;
  const dx=e.clientX-pStart.x;
  if(Math.abs(dx)>4) pMoved=true;
  if(interactive){
    userRotY=pStart.rot+dx*0.012;
  }
});

function finishPointer(e){
  if(!activePointers.has(e.pointerId)) return;
  const shouldTap=activePointers.size===1 && e.pointerId===primaryPointerId && pStart && !pMoved;
  activePointers.delete(e.pointerId);

  if(shouldTap) handleTap(e);

  if(activePointers.size===1){
    const [id,point]=activePointers.entries().next().value;
    primaryPointerId=id;
    pStart={x:point.x,y:point.y,rot:userRotY};
    pMoved=true;
  } else if(activePointers.size===0){
    pStart=null;
    primaryPointerId=null;
    pMoved=false;
  }
}
canvas.addEventListener('pointerup',finishPointer);
canvas.addEventListener('pointercancel',finishPointer);
window.addEventListener('pointerup',finishPointer);

canvas.addEventListener('wheel',e=>{
  if(!owlObj) return;
  e.preventDefault();
  setModelScale(userScale*Math.exp(-e.deltaY*0.0015));
},{passive:false});

document.getElementById('zoomInBtn').onclick=()=>setModelScale(userScale*1.15);
document.getElementById('zoomOutBtn').onclick=()=>setModelScale(userScale/1.15);
document.getElementById('zoomResetBtn').onclick=()=>setModelScale(1);

function handleTap(e){
  if(!owlObj || !interactive) return;
  openSpeciesProfile();
}

/* ---- bilingual species profile ---- */
const profileBtn=document.getElementById('profileBtn');
const infoSheet=document.getElementById('infoSheet');

function setProfileButtonEnabled(on){
  profileBtn.disabled=!on;
}

function openSpeciesProfile(){
  if(!currentOwl || !interactive) return;
  const profile=OWL_PROFILES[currentOwl.id];
  if(!profile) return;

  document.getElementById('profileTitleZh').textContent=currentOwl.zh;
  document.getElementById('profileTitleEn').textContent=currentOwl.en;
  document.getElementById('profileLatin').textContent=currentOwl.lat;
  document.getElementById('profileContent').innerHTML=`
    <section class="profile-overview">
      <div class="profile-label"><b>基本介紹</b><small>Overview</small></div>
      <p class="zh-value">${profile.overview.zh}</p>
      <p class="en-value" lang="en">${profile.overview.en}</p>
    </section>
    <div class="profile-facts">
      ${profile.facts.map(fact=>`
        <section class="profile-fact">
          <div class="profile-label"><b>${fact.labelZh}</b><small>${fact.labelEn}</small></div>
          <p class="zh-value">${fact.zh}</p>
          <p class="en-value" lang="en">${fact.en}</p>
        </section>
      `).join('')}
    </div>`;
  document.getElementById('profileSources').innerHTML=`
    <span>資料來源 Sources:</span>
    ${profile.sources.map(source=>`<a href="${source.url}" target="_blank" rel="noopener noreferrer">${source.label}</a>`).join('')}`;

  infoSheet.classList.add('open');
  infoSheet.setAttribute('aria-hidden','false');
  profileBtn.setAttribute('aria-expanded','true');
  document.getElementById('hintChip').classList.remove('show');
}

function closeSpeciesProfile(){
  infoSheet.classList.remove('open');
  infoSheet.setAttribute('aria-hidden','true');
  profileBtn.setAttribute('aria-expanded','false');
}

profileBtn.setAttribute('aria-controls','infoSheet');
profileBtn.setAttribute('aria-expanded','false');
profileBtn.onclick=openSpeciesProfile;
document.getElementById('infoClose').onclick=closeSpeciesProfile;
document.addEventListener('keydown',event=>{
  if(event.key==='Escape' && infoSheet.classList.contains('open')) closeSpeciesProfile();
});

/* ---------------------------------------------------------------------- */
/* Synthesized call audio (placeholder — see chat notes)                  */
/* ---------------------------------------------------------------------- */
let actx=null;
function getCtx(){ if(!actx) actx=new (window.AudioContext||window.webkitAudioContext)(); return actx; }

function playTone(ctx, tStart, freqFrom, freqTo, dur, peakGain, type='sine'){
  const osc=ctx.createOscillator();
  const gain=ctx.createGain();
  osc.type=type;
  osc.frequency.setValueAtTime(freqFrom, tStart);
  osc.frequency.linearRampToValueAtTime(freqTo, tStart+dur);
  gain.gain.setValueAtTime(0.0001, tStart);
  gain.gain.linearRampToValueAtTime(peakGain, tStart+dur*0.18);
  gain.gain.exponentialRampToValueAtTime(0.0001, tStart+dur);
  osc.connect(gain); gain.connect(ctx.destination);
  osc.start(tStart); osc.stop(tStart+dur+0.02);
}
function playNoiseSweep(ctx, tStart, dur, f1, f2, peakGain){
  const bufSize=ctx.sampleRate*dur;
  const buf=ctx.createBuffer(1,bufSize,ctx.sampleRate);
  const d=buf.getChannelData(0);
  for(let i=0;i<bufSize;i++) d[i]=Math.random()*2-1;
  const src=ctx.createBufferSource(); src.buffer=buf;
  const bp=ctx.createBiquadFilter(); bp.type='bandpass'; bp.Q.value=6;
  bp.frequency.setValueAtTime(f1,tStart);
  bp.frequency.linearRampToValueAtTime(f2,tStart+dur*0.55);
  bp.frequency.linearRampToValueAtTime(f1*0.8,tStart+dur);
  const gain=ctx.createGain();
  gain.gain.setValueAtTime(0.0001,tStart);
  gain.gain.linearRampToValueAtTime(peakGain,tStart+dur*0.25);
  gain.gain.exponentialRampToValueAtTime(0.0001,tStart+dur);
  src.connect(bp); bp.connect(gain); gain.connect(ctx.destination);
  src.start(tStart); src.stop(tStart+dur+0.02);
}

function playCall(owl){
  const ctx=getCtx();
  if(ctx.state==='suspended') ctx.resume();
  const now=ctx.currentTime+0.02;
  switch(owl.call){
    case 'hoot4':
      for(let i=0;i<4;i++) playTone(ctx, now+i*0.46, 380, 250, 0.34, 0.22, 'sine');
      break;
    case 'trill':
      for(let i=0;i<3;i++) playTone(ctx, now+i*0.24, 780, 640, 0.13, 0.16, 'triangle');
      break;
    case 'screech':
      playNoiseSweep(ctx, now, 1.25, 1000, 2500, 0.20);
      break;
    case 'softhoot':
      playTone(ctx, now, 230, 190, 0.4, 0.16, 'sine');
      playTone(ctx, now+0.55, 220, 180, 0.4, 0.14, 'sine');
      break;
  }
  toast('🔊 '+owl.callNote+'（合成示範音效）');
}
document.getElementById('callBtn').onclick=()=>{ if(currentOwl) playCall(currentOwl); };

/* initial sizing */
window.addEventListener('load', resizeRenderer);
setTimeout(resizeRenderer, 50);
