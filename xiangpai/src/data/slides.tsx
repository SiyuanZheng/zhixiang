import React from 'react';
import { SlideData } from '../types/presentation';

// Refined sizes and spacings to completely prevent vertical overflows in the 810px canvas
const textTitle = "text-4xl md:text-5xl font-serif text-[rgb(44,44,44)] mb-6 tracking-[0.2em] leading-normal font-bold";
const textBody = "text-xl md:text-2xl font-serif text-[rgb(60,60,60)] leading-relaxed tracking-wide space-y-4";
const textHighlight = "text-2xl md:text-3xl font-serif text-[rgb(44,44,44)] my-3 tracking-widest font-bold inline-block border-b-2 border-[rgb(180,180,180)] pb-2";

export const slides: SlideData[] = [
  // Slide 1 - 封面
  {
    id: 1,
    content: (
      <div className="flex flex-col items-center justify-center text-center -mt-4">
        <h1 className="text-5xl md:text-6xl font-serif text-[rgb(30,30,30)] tracking-[0.25em] mb-10 leading-tight font-bold hover:scale-105 transition-transform duration-500 cursor-default">
          五律归元・五行疗愈香牌沙龙
        </h1>
        <div className="h-[2px] w-48 bg-[rgb(180,180,180)] mb-8"></div>
        <h2 className="text-3xl md:text-4xl font-serif text-[rgb(60,60,60)] tracking-widest mb-10">
          香艺・五行・身心调律
        </h2>
        <p className="text-xl md:text-2xl font-serif text-[rgb(100,100,100)] tracking-widest mt-6 bg-[rgba(0,0,0,0.03)] px-8 py-4 rounded-md hover:bg-[rgba(0,0,0,0.05)] transition-colors duration-300">
          以草木香韵调和身心五行气韵
        </p>
      </div>
    )
  },

  // Slide 2 - 开场：以香为镜
  {
    id: 2,
    partName: "一、开场",
    content: (
      <div className="max-w-5xl mx-auto flex flex-col justify-center text-center mt-4">
        <h2 className={textTitle}>以香为镜，照见情绪</h2>
        <div className={textBody}>
          <p>古人早就发现，不同的情绪会<span className={`${textHighlight} hover:text-[#856d4d] transition-colors duration-300 cursor-default`}>"藏在"</span>不同的脏腑里</p>
          <div className="flex justify-center gap-6 my-6 flex-wrap">
            {[
              ['悲伤', '肺', 'rgb(100,100,100)'],
              ['怒气', '肝', 'rgb(46,139,87)'],
              ['恐惧', '肾', 'rgb(25,25,112)'],
              ['过喜', '心', 'rgb(178,34,34)'],
              ['思虑', '脾', 'rgb(180,140,20)']
            ].map(([emotion, organ, color]) => (
              <div key={emotion} className="flex flex-col items-center bg-white border border-[rgb(235,235,235)] rounded-xl px-5 py-3 shadow-custom hover:-translate-y-1 transition-all duration-300">
                <span className="text-xl font-bold" style={{ color }}>{emotion}</span>
                <span className="text-sm text-[rgb(130,130,130)] mt-1 tracking-widest">在{organ}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-8 text-left mx-auto max-w-2xl bg-[rgba(0,0,0,0.02)] py-5 pr-8 rounded-r-2xl hover:shadow-md transition-shadow duration-300">
            香气，恰恰可以走到这些地方，<br/>
            帮我们把堵住的情绪，一点点化开。<br/><br/>
            <span className="font-bold text-[#856d4d] text-2xl tracking-widest">以香调心，以手愈己</span>
          </div>
        </div>
      </div>
    )
  },

  // Slide 3 - 合香历史总览
  {
    id: 3,
    partName: "二、合香历史",
    content: (
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>古人如何用香养心</h2>
        <p className="text-lg text-[rgb(100,100,100)] tracking-widest mb-8">三千年香文化，一脉相承，从未断绝</p>
        <div className="flex gap-6 w-full">
          {[
            ['先秦', '佩香以正心', '屈原《离骚》："纫秋兰以为佩"', '主动的情绪锚定'],
            ['汉代', '博山炉与精神寄托', '烟气袅袅，仿若进入安宁空间', '有引导的意象放松'],
            ['宋代', '香牌诞生', '不用火，随身佩戴', '把心安在身上'],
            ['明清至今', '一缕未断的香气', '从宫廷走入百姓家', '延续活着的文化脉络']
          ].map(([era, title, sub, tag]) => (
            <div key={era} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-2xl p-5 shadow-custom hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="text-lg font-bold text-[#856d4d] tracking-widest mb-2">{era}</div>
              <div className="text-base font-bold text-[rgb(44,44,44)] tracking-wide mb-2">{title}</div>
              <div className="text-sm text-[rgb(100,100,100)] leading-relaxed mb-3 flex-grow">{sub}</div>
              <div className="text-xs text-[rgb(140,140,140)] bg-[rgba(133,109,77,0.07)] px-3 py-1 rounded-full self-center">{tag}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },

  // Slide 4 - 先秦
  {
    id: 4,
    partName: "二、合香历史",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>先秦・佩香以正心</h2>
        <div className={textBody}>
          <p className="mb-4">三千年前，中国人就开始佩戴香草。屈原在《离骚》里写：</p>
          <div className="bg-white border border-[rgb(230,230,230)] rounded-2xl px-12 py-6 mb-6 shadow-custom hover:-translate-y-1 transition-all duration-300">
            <span className="text-4xl font-bold text-[rgb(44,44,44)] tracking-[0.4em]">"纫秋兰以为佩"</span>
            <p className="text-base text-[rgb(130,130,130)] mt-3 tracking-widest">把秋兰连缀起来佩在身上</p>
          </div>
          <p className="mb-4">在心理学看来，这是一种<strong className="text-[rgb(44,44,44)]">主动的情绪锚定</strong>——当一个人反复闻到某种安定的香气，大脑就会建立"这个气味=安全"的联结。</p>
          <div className="mt-6 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-8 text-left mx-auto max-w-2xl bg-[rgba(0,0,0,0.02)] py-5 pr-8 rounded-r-2xl">
            古人未必懂神经科学，但他们知道：<br/>
            <span className="font-bold text-[#856d4d] text-2xl tracking-widest">香，能让心定下来。</span>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5 - 汉代
  {
    id: 5,
    partName: "二、合香历史",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>汉代・博山炉与精神寄托</h2>
        <div className={textBody}>
          <p className="mb-6">汉代出现了<strong className="text-[rgb(44,44,44)]">博山炉</strong>——烟气从仙山造型的孔隙中升起，人看着烟、闻着香，仿佛进入另一个安宁的空间。</p>
          <div className="flex gap-5 mb-6">
            {[
              ['🏔️', '视觉引导', '仙山造型，烟雾缭绕'],
              ['🌿', '嗅觉安抚', '稳定气味，安定内心'],
              ['🧘', '意象放松', '从情绪漩涡里抽离']
            ].map(([icon, title, desc]) => (
              <div key={title} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl p-5 shadow-custom hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-2">{icon}</div>
                <div className="text-base font-bold text-[rgb(44,44,44)] tracking-wide mb-1">{title}</div>
                <div className="text-sm text-[rgb(110,110,110)] leading-relaxed">{desc}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-8 text-left mx-auto max-w-2xl bg-[rgba(0,0,0,0.02)] py-5 pr-8 rounded-r-2xl">
            <span className="font-bold text-[#856d4d] text-xl tracking-widest">博山炉，就是汉代人的"冥想工具"。</span>
          </div>
        </div>
      </div>
    )
  },

  // Slide 6 - 宋代
  {
    id: 6,
    partName: "二、合香历史",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>宋代・香牌诞生</h2>
        <div className={textBody}>
          <p className="mb-4">宋代是中国香文化的<span className="text-[#856d4d] font-bold">巅峰</span>。也正是在宋代，香牌成熟了。</p>
          <div className="flex items-center gap-6 mb-6 justify-center">
            <div className="bg-white border border-[rgb(230,230,230)] rounded-xl px-8 py-4 shadow-custom">
              <div className="text-sm text-[rgb(130,130,130)] tracking-widest mb-1">以前的香</div>
              <div className="text-base font-bold text-[rgb(60,60,60)]">需要点燃，不可随身</div>
            </div>
            <div className="text-2xl text-[rgb(150,150,150)]">→</div>
            <div className="bg-[rgba(133,109,77,0.06)] border border-[rgba(133,109,77,0.2)] rounded-xl px-8 py-4">
              <div className="text-sm text-[#856d4d] tracking-widest mb-1">香牌</div>
              <div className="text-base font-bold text-[rgb(44,44,44)]">不用火，靠自然挥发<br/>随身佩戴</div>
            </div>
          </div>
          <p className="mb-4">宋人还明确提出"<strong className="text-[rgb(44,44,44)]">香能养性</strong>"——文人黄庭坚自称"香癖"，对他来说，合香是一种情绪调节的日常方法。</p>
          <div className="mt-4 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-8 text-left mx-auto max-w-2xl bg-[rgba(0,0,0,0.02)] py-5 pr-8 rounded-r-2xl">
            <span className="font-bold text-[#856d4d] text-xl tracking-widest">把一份安宁带在身上，随时回到那个平稳的状态。</span>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7 - 明清至今
  {
    id: 7,
    partName: "二、合香历史",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>明清至今・一缕未断的香气</h2>
        <div className={textBody}>
          <p className="mb-4">明清时期，香牌、香珠更加普及，从宫廷走入百姓家。《红楼梦》里就有多次描写用香熏衣、熏被的场景。</p>
          <p className="mb-6">虽然近代受到西方香水、化学香精的冲击，但传统合香在民间从未断绝。</p>
          <div className="bg-white border border-[rgb(230,230,230)] rounded-2xl px-10 py-6 shadow-custom hover:-translate-y-1 transition-all duration-300">
            <p className="text-lg text-[rgb(100,100,100)] tracking-wide mb-4">我们今天坐在这里做香牌，不是模仿古人，<br/>而是在延续一条活着的文化脉络</p>
            <div className="flex justify-center gap-6 flex-wrap">
              {['用香安神', '养气', '正心', '调情'].map((tag) => (
                <span key={tag} className="text-lg font-bold text-[#856d4d] tracking-widest border-b-2 border-[rgba(133,109,77,0.35)] pb-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8 - 互动一：情绪卡破冰
  {
    id: 8,
    partName: "三、互动环节一・情绪卡破冰",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
        <h2 className={textTitle}>情绪卡・破冰</h2>
        <p className="text-lg text-[rgb(130,130,130)] tracking-widest mb-6 text-center">约 5-8 分钟</p>
        <div className={textBody}>
          <p className="mb-4">好，刚才我们了解了香与情绪的历史渊源。现在邀请大家做一个简单的小互动。</p>
          <p className="mb-4">请看自己手边的情绪卡，上面写有：</p>
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            {['悲伤', '愤怒', '恐惧', '焦虑', '思虑', '孤独', '委屈', '压抑'].map((e, i) => {
              const colors = ['rgb(100,100,100)', 'rgb(46,139,87)', 'rgb(25,25,112)', 'rgb(180,140,20)', 'rgb(178,34,34)', 'rgb(130,90,180)', 'rgb(160,80,40)', 'rgb(70,70,70)'];
              return (
                <span key={e} className="bg-white border rounded-full px-5 py-2 text-base font-bold tracking-widest" style={{ borderColor: `${colors[i]}40`, color: colors[i] }}>
                  {e}
                </span>
              );
            })}
          </div>
          <p className="mb-4 font-bold text-[rgb(44,44,44)]">和身边小伙伴简单分享两件事：</p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-4 items-start bg-white border border-[rgb(235,235,235)] rounded-xl p-4 shadow-sm">
              <span className="text-xl font-bold text-[#856d4d]">①</span>
              <p>你最近有没有一个很小的瞬间，跟这个情绪有关？哪怕只是昨天等车时的一阵烦躁，或听到某首歌时的一阵难过。</p>
            </div>
            <div className="flex gap-4 items-start bg-white border border-[rgb(235,235,235)] rounded-xl p-4 shadow-sm">
              <span className="text-xl font-bold text-[#856d4d]">②</span>
              <p>如果用一个颜色、一个形状来形容这种情绪在你身体里的位置，它在哪里？胸口？喉咙？肩膀？还是胃？</p>
            </div>
          </div>
          <div className="mt-6 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-6 bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
            <p>大家会发现：情绪不是抽象的概念，它就住在我们的身体里。而等一下我们要做的香牌，恰恰就是通过香气，去和这些住在身体里的情绪对话。</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9 - 情绪住在五脏里
  {
    id: 9,
    partName: "四、认识情绪香粉",
    content: (
      <div className="max-w-6xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>认识情绪香粉</h2>
        <p className="text-lg text-[rgb(110,110,110)] tracking-widest mb-4">现在我们来认识今天准备的香粉。它们按照中医五行，对应不同的脏腑与情绪。</p>
        <p className="text-base text-[rgb(120,120,120)] tracking-widest mb-8">在中医体系中，五行、脏腑与情绪紧密相连</p>
        <div className="flex gap-4 w-full mb-8">
          {[
            ['木', '肝', '怒', 'rgb(46,139,87)', 'rgba(46,139,87,0.07)', '怒气、烦躁、看什么都不顺眼'],
            ['火', '心', '喜', 'rgb(178,34,34)', 'rgba(178,34,34,0.07)', '过度兴奋后的空虚、睡不着'],
            ['土', '脾', '思', 'rgb(180,140,20)', 'rgba(218,165,32,0.08)', '反复想同一件事、没胃口'],
            ['金', '肺', '悲', 'rgb(100,100,100)', 'rgba(160,160,160,0.1)', '叹气、胸口发闷、情绪低落'],
            ['水', '肾', '恐', 'rgb(25,25,112)', 'rgba(25,25,112,0.07)', '恐惧、焦虑、总担心不好的事']
          ].map(([element, organ, emotion, color, bg, desc]) => (
            <div key={element} 
              className="flex-1 rounded-2xl p-5 border transition-all duration-300 cursor-default hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: bg, borderColor: `${color}33` }}
            >
              <div className="text-3xl font-bold tracking-widest mb-2" style={{ color }}>{element}</div>
              <div className="text-base text-[rgb(80,80,80)] tracking-widest mb-1">{organ}</div>
              <div className="w-6 h-0.5 mx-auto my-2 opacity-50" style={{ backgroundColor: color }}></div>
              <div className="text-xl font-bold tracking-widest mb-2" style={{ color }}>{emotion}</div>
              <div className="text-xs text-[rgb(110,110,110)] leading-relaxed tracking-wide">{desc}</div>
            </div>
          ))}
        </div>
        <p className="text-lg text-[rgb(120,120,120)] tracking-widest">每一种情绪，都有与之共鸣的香气</p>
      </div>
    )
  },

  // Slide 10 - 金・肺・悲
  {
    id: 10,
    partName: "四、认识情绪香粉",
    bgTint: "rgba(160,160,160,0.08)",
    content: (
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[rgba(100,100,100,0.1)] flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-500">
          <span className="text-5xl font-bold text-[rgb(100,100,100)]">金</span>
        </div>
        <h2 className="text-4xl font-bold text-[rgb(100,100,100)] tracking-widest mb-2">金・肺・悲</h2>
        <div className="bg-[rgba(255,255,255,0.7)] px-8 py-3 rounded-full mb-6 border border-[rgba(255,255,255,0.9)] shadow-sm">
          <span className="text-base text-[rgb(130,130,130)] tracking-widest uppercase mr-4">关键词</span>
          <span className="text-2xl font-bold text-[rgb(44,44,44)] tracking-widest">沉降</span>
        </div>
        <div className="flex gap-5 w-full mb-4">
          {[
            ['沉香', '沉降・安稳', '适合心里有东西放不下的时候'],
            ['乳香', '舒展・开阔', '像把闷闷的胸口打开一扇窗'],
            ['桂花', '甜美・温暖', '适合那种淡淡的、说不清的忧伤']
          ].map(([name, kw, desc]) => (
            <div key={name} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl p-5 shadow-custom hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-xl font-bold text-[rgb(44,44,44)] tracking-widest mb-2">{name}</div>
              <div className="text-sm text-[rgb(100,100,100)] tracking-widest mb-2">{kw}</div>
              <div className="text-xs text-[rgb(120,120,120)] leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(100,100,100)] pl-6 text-left w-full max-w-2xl bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
          <p className="text-base">引导语：如果你最近容易难过、或者总在怀念什么，可以多放一点 <strong className="text-[rgb(100,100,100)]">桂花</strong>。</p>
        </div>
      </div>
    )
  },

  // Slide 11 - 木・肝・怒
  {
    id: 11,
    partName: "四、认识情绪香粉",
    bgTint: "rgba(46,139,87,0.04)",
    content: (
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[rgba(46,139,87,0.1)] flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-500">
          <span className="text-5xl font-bold text-[rgb(46,139,87)]">木</span>
        </div>
        <h2 className="text-4xl font-bold text-[rgb(46,139,87)] tracking-widest mb-2">木・肝・怒</h2>
        <div className="bg-[rgba(255,255,255,0.7)] px-8 py-3 rounded-full mb-6 border border-[rgba(255,255,255,0.9)] shadow-sm">
          <span className="text-base text-[rgb(130,130,130)] tracking-widest uppercase mr-4">关键词</span>
          <span className="text-2xl font-bold text-[rgb(44,44,44)] tracking-widest">疏通</span>
        </div>
        <div className="flex gap-5 w-full mb-4">
          {[
            ['檀香', '温厚・安稳', '像一只手轻轻按住你的肩膀，说"没事"'],
            ['龙脑（冰片）', '清凉・通透', '怒火攻心时，让头脑"冷"下来'],
            ['降真香', '疏通・化解', '适合"明明很气却说不出来"的时候']
          ].map(([name, kw, desc]) => (
            <div key={name} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl p-5 shadow-custom hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-xl font-bold text-[rgb(44,44,44)] tracking-widest mb-2">{name}</div>
              <div className="text-sm text-[rgb(46,139,87)] tracking-widest mb-2">{kw}</div>
              <div className="text-xs text-[rgb(120,120,120)] leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(46,139,87)] pl-6 text-left w-full max-w-2xl bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
          <p className="text-base">引导语：如果你最近容易发火、或者心里有一股无名火，可以选 <strong className="text-[rgb(46,139,87)]">龙脑或檀香</strong>。</p>
        </div>
      </div>
    )
  },

  // Slide 12 - 水・肾・恐
  {
    id: 12,
    partName: "四、认识情绪香粉",
    bgTint: "rgba(25,25,112,0.04)",
    content: (
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[rgba(25,25,112,0.1)] flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-500">
          <span className="text-5xl font-bold text-[rgb(25,25,112)]">水</span>
        </div>
        <h2 className="text-4xl font-bold text-[rgb(25,25,112)] tracking-widest mb-2">水・肾・恐</h2>
        <div className="bg-[rgba(255,255,255,0.7)] px-8 py-3 rounded-full mb-6 border border-[rgba(255,255,255,0.9)] shadow-sm">
          <span className="text-base text-[rgb(130,130,130)] tracking-widest uppercase mr-4">关键词</span>
          <span className="text-2xl font-bold text-[rgb(44,44,44)] tracking-widest">滋养</span>
        </div>
        <div className="flex gap-6 w-full max-w-3xl mb-4">
          {[
            ['女贞子', '补益・滋养', '像给耗空的身体慢慢加水，温和而持久'],
            ['茯苓', '安定・沉稳', '适合睡前胡思乱想、心跳加速的时候']
          ].map(([name, kw, desc]) => (
            <div key={name} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl p-6 shadow-custom hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-2xl font-bold text-[rgb(44,44,44)] tracking-widest mb-2">{name}</div>
              <div className="text-base text-[rgb(25,25,112)] tracking-widest mb-3">{kw}</div>
              <div className="text-sm text-[rgb(120,120,120)] leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(25,25,112)] pl-6 text-left w-full max-w-2xl bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
          <p className="text-base">引导语：如果你总是焦虑、睡不安稳，<strong className="text-[rgb(25,25,112)]">茯苓</strong>会给你一种"落地"的感觉。</p>
        </div>
      </div>
    )
  },

  // Slide 13 - 火・心・喜
  {
    id: 13,
    partName: "四、认识情绪香粉",
    bgTint: "rgba(178,34,34,0.04)",
    content: (
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[rgba(178,34,34,0.1)] flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-500">
          <span className="text-5xl font-bold text-[rgb(178,34,34)]">火</span>
        </div>
        <h2 className="text-4xl font-bold text-[rgb(178,34,34)] tracking-widest mb-2">火・心・喜</h2>
        <div className="bg-[rgba(255,255,255,0.7)] px-8 py-3 rounded-full mb-6 border border-[rgba(255,255,255,0.9)] shadow-sm">
          <span className="text-base text-[rgb(130,130,130)] tracking-widest uppercase mr-4">关键词</span>
          <span className="text-2xl font-bold text-[rgb(44,44,44)] tracking-widest">收敛</span>
        </div>
        <div className="flex gap-5 w-full mb-4">
          {[
            ['酸枣仁', '收敛・安神', '专治"心里有事，翻来覆去睡不着"'],
            ['薰衣草', '平衡・镇静', '兴奋过头时，轻轻把你拉回来'],
            ['艾草', '温暖・有力量', '像冬天晒到太阳，踏实而温热']
          ].map(([name, kw, desc]) => (
            <div key={name} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl p-5 shadow-custom hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-xl font-bold text-[rgb(44,44,44)] tracking-widest mb-2">{name}</div>
              <div className="text-sm text-[rgb(178,34,34)] tracking-widest mb-2">{kw}</div>
              <div className="text-xs text-[rgb(120,120,120)] leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(178,34,34)] pl-6 text-left w-full max-w-2xl bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
          <p className="text-base">引导语：如果你容易想很多、停不下来，<strong className="text-[rgb(178,34,34)]">酸枣仁和薰衣草</strong>会很适合你。</p>
        </div>
      </div>
    )
  },

  // Slide 14 - 土・脾・思
  {
    id: 14,
    partName: "四、认识情绪香粉",
    bgTint: "rgba(218,165,32,0.05)",
    content: (
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="w-24 h-24 rounded-full bg-[rgba(218,165,32,0.12)] flex items-center justify-center mb-4 hover:scale-110 transition-transform duration-500">
          <span className="text-5xl font-bold text-[rgb(180,140,20)]">土</span>
        </div>
        <h2 className="text-4xl font-bold text-[rgb(180,140,20)] tracking-widest mb-2">土・脾・思</h2>
        <div className="bg-[rgba(255,255,255,0.7)] px-8 py-3 rounded-full mb-6 border border-[rgba(255,255,255,0.9)] shadow-sm">
          <span className="text-base text-[rgb(130,130,130)] tracking-widest uppercase mr-4">关键词</span>
          <span className="text-2xl font-bold text-[rgb(44,44,44)] tracking-widest">疏解</span>
        </div>
        <div className="flex gap-5 w-full mb-4">
          {[
            ['佛手柑', '清爽・打开', '像给堵住的思绪开一扇窗，清新舒朗'],
            ['玫瑰', '温柔・流动', '适合那种"说不出的委屈"'],
            ['檀香', '稳定・扎根', '让漂浮的思绪慢慢落下来']
          ].map(([name, kw, desc]) => (
            <div key={name} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl p-5 shadow-custom hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <div className="text-xl font-bold text-[rgb(44,44,44)] tracking-widest mb-2">{name}</div>
              <div className="text-sm text-[rgb(180,140,20)] tracking-widest mb-2">{kw}</div>
              <div className="text-xs text-[rgb(120,120,120)] leading-relaxed">{desc}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,140,20)] pl-6 text-left w-full max-w-2xl bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
          <p className="text-base">引导语：如果你总是想太多、放不下，<strong className="text-[rgb(180,140,20)]">佛手柑</strong>会让你觉得轻松一些。</p>
        </div>
      </div>
    )
  },

  // Slide 15 - 选香原则
  {
    id: 15,
    partName: "四、认识情绪香粉",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>选香原则</h2>
        <div className="bg-white border border-[rgb(230,230,230)] rounded-2xl px-14 py-8 shadow-custom mb-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <p className="text-lg text-[rgb(100,100,100)] tracking-widest mb-3">不一定要"对症"</p>
          <p className="text-4xl font-bold text-[#856d4d] tracking-widest">相信你的鼻子</p>
        </div>
        <p className="text-xl text-[rgb(80,80,80)] tracking-widest mb-8">你被哪个气味吸引，说明你的身体现在需要它</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {[
            ['金・肺', '沉香 乳香 桂花', 'rgb(100,100,100)'],
            ['木・肝', '檀香 龙脑 降真香', 'rgb(46,139,87)'],
            ['水・肾', '女贞子 茯苓', 'rgb(25,25,112)'],
            ['火・心', '酸枣仁 薰衣草 艾草', 'rgb(178,34,34)'],
            ['土・脾', '佛手柑 玫瑰 檀香', 'rgb(180,140,20)']
          ].map(([el, herbs, c]) => (
            <div key={el} className="bg-white border rounded-xl px-5 py-3 hover:-translate-y-1 transition-all duration-300" style={{ borderColor: `${c}33` }}>
              <div className="text-base font-bold tracking-widest mb-1" style={{ color: c }}>{el}</div>
              <div className="text-sm text-[rgb(110,110,110)] tracking-wide">{herbs}</div>
            </div>
          ))}
        </div>
      </div>
    )
  },

  // Slide 16 - 互动二：正念闻香
  {
    id: 16,
    partName: "五、互动环节二・正念闻香",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>正念闻香</h2>
        <p className="text-2xl font-bold text-[#856d4d] tracking-[0.35em] mb-8">只闻，不想</p>
        <div className="flex flex-col gap-3 w-full max-w-2xl mb-6">
          {[
            '闭上眼睛，身体坐直，双手自然放在腿上',
            '拿起第一种香粉，放在鼻子下方，只感受：它是凉的还是温的？向上还是向下？身体哪里有感觉？',
            '放下，拿起第二种——同样，只闻，不想',
            '最后拿起主香，深吸一口气，然后慢慢呼出'
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-4 bg-white border border-[rgb(235,235,235)] rounded-xl p-4 shadow-sm hover:translate-x-1 transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-[rgba(133,109,77,0.1)] flex items-center justify-center animate-pulse">
                <span className="text-base font-bold text-[#856d4d]">{i + 1}</span>
              </div>
              <p className="text-base text-[rgb(60,60,60)] tracking-wide text-left">{t}</p>
            </div>
          ))}
        </div>
        <div className="text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-6 text-left w-full max-w-2xl bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
          <p className="text-base">正念不是"清空大脑"，而是觉察到自己在想什么，然后回来。<br/>
          <strong className="text-[#856d4d]">现在你手里的香粉，就是你的身体替你选出来的。请相信它。</strong></p>
        </div>
      </div>
    )
  },

  // Slide 17 - 互动三：调香意图
  {
    id: 17,
    partName: "六、互动环节三・调香意图",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>调香意图・立愿</h2>
        <div className="bg-white border border-[rgb(230,230,230)] rounded-2xl px-14 py-8 shadow-custom mb-8 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <p className="text-base text-[rgb(130,130,130)] tracking-widest mb-3">请在心里默默完成这句话——</p>
          <p className="text-3xl font-bold text-[rgb(44,44,44)] tracking-widest">"我今天想用这味香安抚……"</p>
        </div>
        <div className="flex flex-col gap-2 w-full max-w-xl mb-6">
          {[
            '"我今天想用这味香安抚我的焦虑。"',
            '"我今天想用这味香安抚那种说不出来的累。"',
            '"我今天想用这味香安抚最近和家人的那场争执。"'
          ].map((ex) => (
            <div key={ex} className="bg-[rgba(133,109,77,0.05)] border border-[rgba(133,109,77,0.15)] rounded-xl px-6 py-3 text-base text-[rgb(80,80,80)] tracking-wide hover:translate-x-2 transition-all duration-300">
              {ex}
            </div>
          ))}
        </div>
        <div className="text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-6 text-left w-full max-w-xl bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
          <p className="text-base">在古人那里叫"<strong className="text-[#856d4d]">立愿</strong>"——先明确为什么做香，有了这个意图，香就不再是一块泥，而是一份<strong className="text-[rgb(44,44,44)]">心意</strong>。</p>
        </div>
      </div>
    )
  },

  // Slide 18 - 香牌制作总览
  {
    id: 18,
    partName: "七、香牌制作",
    content: (
      <div className="max-w-5xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>香牌制作・六步疗愈之旅</h2>
        <p className="text-base text-[rgb(120,120,120)] tracking-widest mb-10">每一步，都是一次自我疗愈的过程</p>
        <div className="flex items-center w-full">
          {[
            ['①', '选方', '为当下开方'],
            ['②', '和香', '揉进温柔里'],
            ['③', '入模', '给出安稳形状'],
            ['④', '打孔', '留情绪出口'],
            ['⑤', '阴干', '让成长发生'],
            ['⑥', '穿绳', '随身携带安宁']
          ].map(([num, title, sub], i, arr) => (
            <React.Fragment key={title}>
              <div className="flex-1 bg-white border-2 border-[rgb(230,230,230)] rounded-xl px-3 py-4 text-center hover:-translate-y-1 hover:shadow-md transition-all duration-300">
                <div className="text-base font-bold text-[#856d4d] mb-1">{num}</div>
                <div className="text-lg font-bold text-[rgb(44,44,44)] tracking-widest mb-1">{title}</div>
                <div className="text-xs text-[rgb(120,120,120)] tracking-wide">{sub}</div>
              </div>
              {i < arr.length - 1 && <div className="text-[rgb(180,180,180)] text-xl px-1">→</div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  },

  // Slide 19 - 第一步：选方
  {
    id: 19,
    partName: "七、香牌制作",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-xl font-bold text-[#856d4d] tracking-widest">第一步</span>
          <h2 className="text-4xl font-bold text-[rgb(44,44,44)] tracking-widest">选方</h2>
          <span className="text-lg text-[rgb(120,120,120)] tracking-widest">为当下的自己"开方"</span>
        </div>
        <div className={textBody}>
          <p className="mb-4">挑选 <strong className="text-[#856d4d]">2–3 种</strong> 自己喜欢、适配自身情绪的香粉，按照以下比例放入干净小碗中：</p>
          <div className="bg-white border border-[rgb(230,230,230)] rounded-xl px-10 py-5 mb-6 shadow-custom text-center">
            <span className="text-xl font-bold text-[rgb(44,44,44)] tracking-widest">香粉 : 楠木/白芨粘粉</span>
            <span className="text-3xl font-bold text-[#856d4d] mx-5">=</span>
            <span className="text-3xl font-bold text-[#856d4d] tracking-widest">3 : 1</span>
            <p className="text-sm text-[rgb(150,150,150)] mt-2 tracking-widest">黄金比例</p>
          </div>
          <p className="mb-4">制作时回想自己刚刚立下的心愿：你想安抚哪种情绪、治愈哪一份内耗？</p>
          <div className="text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-6 bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
            <p className="text-base">这不是简单的调香，而是为当下的自己，<br/><strong className="text-[#856d4d]">量身定制一味专属的香气处方。</strong></p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 20 - 第二步：和香
  {
    id: 20,
    partName: "七、香牌制作",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-xl font-bold text-[#856d4d] tracking-widest">第二步</span>
          <h2 className="text-4xl font-bold text-[rgb(44,44,44)] tracking-widest">和香</h2>
          <span className="text-lg text-[rgb(120,120,120)] tracking-widest">把情绪揉进温柔里</span>
        </div>
        <div className={textBody}>
          <p className="mb-4">少量多次加入纯净水，循序渐进搅拌揉捏，最终揉至<strong className="text-[rgb(44,44,44)]">捏紧成团、一碰即散</strong>的最佳状态。</p>
          <div className="flex gap-4 mb-6">
            {['柔软', '温润', '质朴'].map(w => (
              <div key={w} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl py-4 text-center shadow-sm">
                <span className="text-2xl font-bold text-[rgb(44,44,44)] tracking-widest">{w}</span>
              </div>
            ))}
          </div>
          <p className="mb-4">全程感受香泥在掌心的温度与触感。每一次揉捏、按压，都是在梳理内心的紧绷与郁结。</p>
          <div className="text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-6 bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
            <p className="text-base mb-2">把生活里的烦躁、焦虑、委屈、内耗，一点点揉进香泥里，慢慢化解、消散。</p>
            <p className="text-base font-bold text-[#856d4d] tracking-widest">这一步无需追求完美。你的香牌独属于你的温度与心境。</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 21 - 第三步：入模
  {
    id: 21,
    partName: "七、香牌制作",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
        <div className="flex items-baseline gap-4 mb-5">
          <span className="text-xl font-bold text-[#856d4d] tracking-widest">第三步</span>
          <h2 className="text-4xl font-bold text-[rgb(44,44,44)] tracking-widest">入模</h2>
          <span className="text-lg text-[rgb(120,120,120)] tracking-widest">给自己一个安稳的形状</span>
        </div>
        <div className={textBody}>
          <p className="mb-4">模具内壁薄涂脱模油，香泥均匀填入，手掌用力均匀压实、压平，仔细修整边缘，随后轻轻脱模。</p>
          <p className="mb-4 font-bold text-[rgb(44,44,44)]">可以根据模具造型赋予香牌寓意：</p>
          <div className="flex gap-4 mb-6">
            {[
              ['平安扣', '圆满顺遂'],
              ['莲花', '清净安宁'],
              ['葫芦', '福禄安康'],
              ['祥云', '万事顺意']
            ].map(([shape, meaning]) => (
              <div key={shape} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl p-4 text-center shadow-custom hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="text-lg font-bold text-[rgb(44,44,44)] tracking-widest mb-2">{shape}</div>
                <div className="w-5 h-0.5 bg-[rgba(133,109,77,0.4)] mx-auto mb-2"></div>
                <div className="text-sm text-[#856d4d] tracking-widest">{meaning}</div>
              </div>
            ))}
          </div>
          <div className="text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-6 bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
            <p className="text-base">给自己的情绪一个具象的、温柔的<strong className="text-[#856d4d]">美好形状</strong>。</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 22 - 第四步：打孔
  {
    id: 22,
    partName: "七、香牌制作",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-xl font-bold text-[#856d4d] tracking-widest">第四步</span>
          <h2 className="text-4xl font-bold text-[rgb(44,44,44)] tracking-widest">打孔</h2>
          <span className="text-lg text-[rgb(120,120,120)] tracking-widest">给情绪留一个流动的出口</span>
        </div>
        <div className={textBody}>
          <p className="mb-6">用牙签或细针，在香牌顶端居中位置<strong className="text-[rgb(44,44,44)]">轻轻打孔</strong>。动作轻柔缓慢，避免香牌破损。</p>
          <div className="bg-white border border-[rgb(230,230,230)] rounded-xl px-10 py-6 shadow-custom mb-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <p className="text-base text-[rgb(100,100,100)] tracking-widest mb-3">这一步有着特别的疗愈意义——</p>
            <p className="text-xl font-bold text-[#856d4d] tracking-widest leading-relaxed">情绪不需要压抑、不需要隐藏，<br/>我们主动为它留一个<strong>出口</strong>。</p>
          </div>
          <p className="text-[rgb(100,100,100)]">让郁结的情绪得以流动、释放，学会与自己的负面情绪<strong className="text-[rgb(44,44,44)]">和解</strong>。</p>
        </div>
      </div>
    )
  },

  // Slide 23 - 第五步：阴干
  {
    id: 23,
    partName: "七、香牌制作",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center">
        <div className="flex items-baseline gap-4 mb-6">
          <span className="text-xl font-bold text-[#856d4d] tracking-widest">第五步</span>
          <h2 className="text-4xl font-bold text-[rgb(44,44,44)] tracking-widest">阴干</h2>
          <span className="text-lg text-[rgb(120,120,120)] tracking-widest">给时间以时间，让成长自然发生</span>
        </div>
        <div className={textBody}>
          <div className="flex gap-5 mb-6 items-stretch">
            <div className="flex-1 bg-white border border-[rgb(230,230,230)] rounded-xl p-5 shadow-sm">
              <div className="text-sm text-[rgb(130,130,130)] tracking-widest mb-2">放置位置</div>
              <div className="text-lg font-bold text-[rgb(44,44,44)]">阴凉・通风・干燥</div>
            </div>
            <div className="flex-1 bg-white border border-[rgb(230,230,230)] rounded-xl p-5 shadow-sm">
              <div className="text-sm text-[rgb(130,130,130)] tracking-widest mb-2">自然阴干时间</div>
              <div className="text-2xl font-bold text-[#856d4d] tracking-widest">3 – 7 天</div>
            </div>
            <div className="flex-1 bg-[rgba(255,80,80,0.05)] border border-[rgba(255,80,80,0.2)] rounded-xl p-5">
              <div className="text-sm text-[rgb(178,34,34)] tracking-widest mb-2 font-bold">⚠ 注意</div>
              <div className="text-sm text-[rgb(150,50,50)] tracking-wide">严禁阳光暴晒<br/>禁止高温烘烤</div>
            </div>
          </div>
          <div className="text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-6 bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl">
            <p className="text-base mb-2">就像香牌需要慢慢风干成型，我们的内心也需要时间<strong className="text-[#856d4d]">自愈・沉淀・成长</strong>。</p>
            <p className="text-base">学会等待，学会温柔对待自己。</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 24 - 第六步：穿绳
  {
    id: 24,
    partName: "七、香牌制作",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <div className="flex items-baseline gap-4 mb-7">
          <span className="text-xl font-bold text-[#856d4d] tracking-widest">第六步</span>
          <h2 className="text-4xl font-bold text-[rgb(44,44,44)] tracking-widest">穿绳</h2>
          <span className="text-lg text-[rgb(120,120,120)] tracking-widest">把安宁随身携带</span>
        </div>
        <p className="text-xl text-[rgb(60,60,60)] tracking-widest mb-8">香牌完全干透定型后，搭配喜欢的挂绳、流苏，完成收尾。</p>
        <div className="bg-white border border-[rgb(230,230,230)] rounded-xl px-14 py-7 shadow-custom hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <p className="text-base text-[rgb(110,110,110)] tracking-widest mb-3">从此，你随身携带的不只是一块手工香牌，更是——</p>
          <p className="text-2xl font-bold text-[#856d4d] tracking-widest leading-relaxed">一份专属自己的心安<br/>一份治愈自我的温柔力量</p>
        </div>
      </div>
    )
  },

  // Slide 25 - 祝福仪式
  {
    id: 25,
    partName: "八、收尾祝福仪式",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className={textTitle}>祝福仪式</h2>
        <p className="text-2xl font-bold text-[#856d4d] tracking-[0.3em] mb-6">愿它……</p>
        <p className="text-lg text-[rgb(100,100,100)] tracking-widest mb-6">每个人轮流说一句祝福，固定句式："愿它……"</p>
        <div className="flex gap-5 w-full mb-6">
          {[
            ['愿它陪我睡个好觉', '送给今晚的自己'],
            ['愿它提醒我慢下来', '送给焦虑的自己'],
            ['愿我少生一点气', '送给心里有火的自己']
          ].map(([wish, sub]) => (
            <div key={wish} className="flex-1 bg-white border border-[rgb(235,235,235)] rounded-xl p-5 shadow-custom hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-default">
              <div className="text-lg font-bold text-[rgb(44,44,44)] tracking-widest mb-2">{wish}</div>
              <div className="w-5 h-0.5 bg-[rgba(133,109,77,0.4)] mx-auto mb-2"></div>
              <div className="text-sm text-[rgb(130,130,130)] tracking-widest">{sub}</div>
            </div>
          ))}
        </div>
        <div className="text-[rgb(120,120,120)] border-l-[4px] border-[rgb(180,180,180)] pl-6 w-full max-w-xl bg-[rgba(0,0,0,0.02)] py-4 pr-6 rounded-r-xl text-left">
          <p className="text-base">不用很长，一个词语、一句话都可以，送给你的香牌，也<strong className="text-[#856d4d]">送给此刻的自己</strong>。</p>
        </div>
      </div>
    )
  },

  // Slide 26 - 结尾
  {
    id: 26,
    partName: "九、总结收尾",
    content: (
      <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-5xl font-bold text-[rgb(44,44,44)] tracking-[0.3em] mb-6">携香而行，心有安宁</h2>
        <div className="h-[2px] w-40 bg-[rgb(200,200,200)] mb-6"></div>
        <div className="text-lg text-[rgb(80,80,80)] leading-relaxed tracking-wide mb-6 max-w-2xl">
          <p className="mb-4">这块香牌，会成为你的专属情绪锚点——</p>
          <div className="flex flex-col gap-2 text-left max-w-lg mx-auto">
            {[
              ['烦躁焦虑时', '一缕清香，提醒你慢下来、静下来'],
              ['低落难过时', '一缕清香，告诉你一直在好好照顾自己'],
              ['迷茫内耗时', '一缕清香，唤醒你值得被温柔以待']
            ].map(([when, what]) => (
              <div key={when} className="flex gap-3 items-start bg-white border border-[rgb(235,235,235)] rounded-lg px-4 py-2 shadow-sm">
                <span className="text-[#856d4d] font-bold whitespace-nowrap tracking-widest">{when}，</span>
                <span className="text-[rgb(80,80,80)]">{what}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="border-t-2 border-[rgb(210,210,210)] pt-6 w-full max-w-lg">
          <p className="text-3xl font-bold text-[#856d4d] tracking-[0.5em] mb-3 hover:scale-105 transition-transform duration-500">愿你携香而行，心有安宁</p>
          <p className="text-3xl font-bold text-[#856d4d] tracking-[0.5em] hover:scale-105 transition-transform duration-500 delay-100">岁岁从容</p>
        </div>
      </div>
    )
  }

];
