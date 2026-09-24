import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./App.css";

/* ==================================================
   TRANSLATIONS
================================================== */

const translations = {
  en: {
    start: "Start practice",
    sideTitle: "A calmer breath",
    sideText: "A clearer day",

    eyebrow: "MINDFUL BREATHING",
    title: "A quiet moment for yourself.",
    subtitle:
      "Guided breathing exercises to help you slow down, reset and return to the present.",

    exercises: "Breathing exercises",
    exerciseSubtitle:
      "Choose a breathing pattern and begin a calmer moment.",
    methods: "4 methods",
    view: "View details",

    aboutEyebrow: "ABOUT BREATH",
    aboutTitle: "Reconnect with yourself.",
    aboutText:
      "We believe breathing is the simplest way to return to the present moment. Through guided exercises, we help you reduce stress, improve sleep, and regain inner focus and calm.",

    intentTitle: "What do you need today?",
    intentRelax: "Relax",
    intentRelaxHint: "Slow · gentle",
    intentFocus: "Focus",
    intentFocusHint: "Clear · steady",
    intentSleep: "Sleep",
    intentSleepHint: "Deep · quiet",

    momentEyebrow: "RIGHT NOW",
    momentMorning: "Morning",
    momentAfternoon: "Afternoon",
    momentEvening: "Evening",
    momentNight: "Night",
    momentReasonMorning:
      "Box breathing wakes up your focus and sets a steady rhythm for the day.",
    momentReasonAfternoon:
      "Cyclic sighing releases built-up tension and brings you back to calm.",
    momentReasonEvening:
      "Slow breathing gently carries you into a resting rhythm.",
    momentReasonNight:
      "4-7-8 breathing helps you fall asleep faster and rest deeper.",
    momentAction: "Begin",

    soundOn: "Turn sound on",
    soundOff: "Turn sound off",

    guided: "GUIDED BREATHING",
    chooseDuration: "Choose duration",
    durationHint: "Choose a short session to begin.",
    back: "Back",

    prepare: "Get ready",
    prepareText:
      "Sit comfortably, relax your shoulders, and breathe naturally.",
    startingIn: "Starting in",

    inhale: "Inhale",
    secondInhale: "Inhale again",
    exhale: "Exhale",
    hold: "Hold",

    remaining: "Remaining",
    pause: "Pause",
    resume: "Resume",
    end: "End",

    complete: "Session complete",
    completeText:
      "Stay still for a moment and notice how you feel.",
    done: "Return home",

    slow: "Slow Breathing",
    slowDesc:
      "A gentle rhythm with a longer exhale to encourage relaxation.",

    box: "Box Breathing",
    boxDesc:
      "A structured four-part breathing pattern for calm and concentration.",

    cyclic: "Cyclic Sighing",
    cyclicDesc:
      "Two inhales followed by a longer exhale for a short calming exercise.",

    breathing478: "4-7-8 Breathing",
    breathing478Desc:
      "A slower breathing pattern commonly used as a relaxation exercise.",
  },

  zh: {
    start: "开始练习",
    sideTitle: "更平静的呼吸",
    sideText: "带来更清晰的生活",

    eyebrow: "MINDFUL BREATHING",
    title: "给自己安静的一刻。",
    subtitle:
      "通过引导式呼吸练习，让身心慢下来，重新找回平衡与专注。",

    exercises: "呼吸练习",
    exerciseSubtitle:
      "选择适合你的呼吸方式，开启一段平静的旅程。",
    methods: "4 种方法",
    view: "查看详情",

    aboutEyebrow: "关于 BREATH",
    aboutTitle: "重新与自己连接。",
    aboutText:
      "我们相信，呼吸是回归当下最简单的方式。通过引导式呼吸练习，帮助您减轻压力、改善睡眠，并找回内在的专注与平静。",

    intentTitle: "今天想获得什么？",
    intentRelax: "放松",
    intentRelaxHint: "缓慢 · 柔和",
    intentFocus: "专注",
    intentFocusHint: "清晰 · 稳定",
    intentSleep: "睡眠",
    intentSleepHint: "深入 · 安静",

    momentEyebrow: "此刻推荐",
    momentMorning: "早晨",
    momentAfternoon: "下午",
    momentEvening: "傍晚",
    momentNight: "夜晚",
    momentReasonMorning:
      "用方块呼吸唤醒专注，为一天建立稳定的节奏。",
    momentReasonAfternoon:
      "循环叹息帮你释放积累的紧张，快速回到平静。",
    momentReasonEvening:
      "慢速呼吸带你温柔过渡到休息的节奏。",
    momentReasonNight:
      "4-7-8 呼吸帮助你更快入睡，进入深度休息。",
    momentAction: "开始",

    soundOn: "开启声音",
    soundOff: "关闭声音",

    guided: "引导式呼吸",
    chooseDuration: "选择练习时长",
    durationHint: "从一个短时间的练习开始。",
    back: "返回",

    prepare: "准备一下",
    prepareText:
      "调整到舒适的姿势，放松肩膀，并保持自然呼吸。",
    startingIn: "即将开始",

    inhale: "吸气",
    secondInhale: "再次吸气",
    exhale: "呼气",
    hold: "屏息",

    remaining: "剩余",
    pause: "暂停",
    resume: "继续",
    end: "结束",

    complete: "练习完成",
    completeText:
      "先停留片刻，感受一下现在身体与情绪的状态。",
    done: "返回首页",

    slow: "慢速呼吸",
    slowDesc:
      "通过较长的呼气与缓慢节奏，帮助身体逐渐放松。",

    box: "方块呼吸",
    boxDesc:
      "由四个阶段组成的结构化呼吸练习，帮助平静与专注。",

    cyclic: "循环叹息呼吸",
    cyclicDesc:
      "连续两次吸气，再进行较长呼气的短时放松练习。",

    breathing478: "4-7-8 呼吸",
    breathing478Desc:
      "一种节奏较慢，常用于放松练习的呼吸方式。",
  },

  ms: {
    start: "Mulakan latihan",
    sideTitle: "Nafas lebih tenang",
    sideText: "Hari yang lebih jelas",

    eyebrow: "MINDFUL BREATHING",
    title: "Satu saat yang tenang untuk diri anda.",
    subtitle:
      "Latihan pernafasan berpandu untuk membantu anda memperlahankan diri dan kembali fokus.",

    exercises: "Latihan pernafasan",
    exerciseSubtitle:
      "Pilih corak pernafasan yang sesuai dan mulakan saat yang lebih tenang.",
    methods: "4 kaedah",
    view: "Lihat butiran",

    aboutEyebrow: "TENTANG BREATH",
    aboutTitle: "Berhubung semula dengan diri anda.",
    aboutText:
      "Kami percaya pernafasan adalah cara paling mudah untuk kembali ke saat ini. Melalui latihan berpandu, kami membantu anda mengurangkan tekanan, memperbaiki tidur dan mendapatkan semula tumpuan serta ketenangan dalaman.",

    intentTitle: "Apa yang anda perlukan hari ini?",
    intentRelax: "Relaks",
    intentRelaxHint: "Perlahan · lembut",
    intentFocus: "Fokus",
    intentFocusHint: "Jernih · stabil",
    intentSleep: "Tidur",
    intentSleepHint: "Dalam · tenang",

    momentEyebrow: "SAAT INI",
    momentMorning: "Pagi",
    momentAfternoon: "Petang",
    momentEvening: "Senja",
    momentNight: "Malam",
    momentReasonMorning:
      "Pernafasan kotak membangunkan fokus dan menetapkan irama harian anda.",
    momentReasonAfternoon:
      "Cyclic sighing melepaskan ketegangan terkumpul dan mengembalikan ketenangan.",
    momentReasonEvening:
      "Pernafasan perlahan membawa anda perlahan-lahan ke irama rehat.",
    momentReasonNight:
      "Pernafasan 4-7-8 membantu anda tidur lebih cepat dan lebih lena.",
    momentAction: "Mula",

    soundOn: "Hidupkan bunyi",
    soundOff: "Matikan bunyi",

    guided: "PERNAFASAN BERPANDU",
    chooseDuration: "Pilih tempoh",
    durationHint: "Mulakan dengan sesi yang ringkas.",
    back: "Kembali",

    prepare: "Bersedia",
    prepareText:
      "Duduk dengan selesa, relakskan bahu dan bernafas secara semula jadi.",
    startingIn: "Bermula dalam",

    inhale: "Tarik nafas",
    secondInhale: "Tarik nafas lagi",
    exhale: "Hembus nafas",
    hold: "Tahan",

    remaining: "Baki",
    pause: "Jeda",
    resume: "Sambung",
    end: "Tamat",

    complete: "Sesi selesai",
    completeText:
      "Berhenti seketika dan perhatikan perasaan anda sekarang.",
    done: "Kembali ke utama",

    slow: "Pernafasan Perlahan",
    slowDesc:
      "Irama lembut dengan hembusan lebih panjang untuk membantu relaksasi.",

    box: "Pernafasan Kotak",
    boxDesc:
      "Corak empat peringkat yang berstruktur untuk ketenangan dan fokus.",

    cyclic: "Cyclic Sighing",
    cyclicDesc:
      "Dua tarikan nafas diikuti hembusan lebih panjang untuk relaksasi ringkas.",

    breathing478: "Pernafasan 4-7-8",
    breathing478Desc:
      "Corak pernafasan perlahan yang biasa digunakan untuk relaksasi.",
  },
};

/* ==================================================
   METHODS
================================================== */

const methods = [
  {
    id: "slow",
    number: "01",
    visual: "visual-slow",
    icon: "⌁",
    nameKey: "slow",
    descriptionKey: "slowDesc",
    pattern: "4s inhale · 6s exhale",
    phases: [
      { label: "inhale", duration: 4, action: "inhale", from: 0.85, to: 1.18 },
      { label: "exhale", duration: 6, action: "exhale", from: 1.18, to: 0.85 },
    ],
  },

  {
    id: "box",
    number: "02",
    visual: "visual-box",
    icon: "□",
    nameKey: "box",
    descriptionKey: "boxDesc",
    pattern: "4 · 4 · 4 · 4",
    phases: [
      { label: "inhale", duration: 4, action: "inhale", from: 0.85, to: 1.18 },
      { label: "hold", duration: 4, action: "hold-full", from: 1.18, to: 1.18 },
      { label: "exhale", duration: 4, action: "exhale", from: 1.18, to: 0.85 },
      { label: "hold", duration: 4, action: "hold-empty", from: 0.85, to: 0.85 },
    ],
  },

  {
    id: "cyclic",
    number: "03",
    visual: "visual-cyclic",
    icon: "⌒",
    nameKey: "cyclic",
    descriptionKey: "cyclicDesc",
    pattern: "Inhale · Inhale · Long exhale",
    phases: [
      { label: "inhale", duration: 2, action: "inhale", from: 0.85, to: 1.08 },
      {
        label: "secondInhale",
        duration: 1,
        action: "second-inhale",
        from: 1.08,
        to: 1.2,
      },
      { label: "exhale", duration: 6, action: "exhale", from: 1.2, to: 0.85 },
    ],
  },

  {
    id: "478",
    number: "04",
    visual: "visual-night",
    icon: "☾",
    nameKey: "breathing478",
    descriptionKey: "breathing478Desc",
    pattern: "4s · 7s · 8s",
    phases: [
      { label: "inhale", duration: 4, action: "inhale", from: 0.85, to: 1.18 },
      { label: "hold", duration: 7, action: "hold-full", from: 1.18, to: 1.18 },
      { label: "exhale", duration: 8, action: "exhale", from: 1.18, to: 0.85 },
    ],
  },
];

const PREPARE_SECONDS = 5;

/* 根据时间推荐最适合的练习 */
function getMomentRecommendation() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 11) {
    return {
      period: "morning",
      periodLabelKey: "momentMorning",
      reasonKey: "momentReasonMorning",
      icon: "☀",
      methodId: "box",
    };
  }

  if (hour >= 11 && hour < 17) {
    return {
      period: "afternoon",
      periodLabelKey: "momentAfternoon",
      reasonKey: "momentReasonAfternoon",
      icon: "◐",
      methodId: "cyclic",
    };
  }

  if (hour >= 17 && hour < 21) {
    return {
      period: "evening",
      periodLabelKey: "momentEvening",
      reasonKey: "momentReasonEvening",
      icon: "◑",
      methodId: "slow",
    };
  }

  return {
    period: "night",
    periodLabelKey: "momentNight",
    reasonKey: "momentReasonNight",
    icon: "☾",
    methodId: "478",
  };
}

function formatTime(seconds) {
  const safe = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safe / 60);
  const sec = safe % 60;
  return `${minutes}:${sec.toString().padStart(2, "0")}`;
}

/* ==================================================
   AMBIENT MUSIC  (Web Audio API 实时合成氛围音乐)
   - 缓慢和弦进行 (Cmaj7 → Am7 → Fmaj7 → G)
   - 4 声部 + 轻微失谐的正弦波
   - 随机五声音阶铃音点缀
   - 延迟反馈网络模拟空间混响
================================================== */

function createAmbientMusic() {
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return null;

  const ctx = new AudioCtx();

  /* ---- 主输出 ---- */
  const master = ctx.createGain();
  master.gain.value = 0; // 初始静音，由 setVolume 淡入
  master.connect(ctx.destination);

  /* ---- 简易混响：延迟反馈网络 ---- */
  const delay = ctx.createDelay(1.2);
  delay.delayTime.value = 0.45;

  const feedback = ctx.createGain();
  feedback.gain.value = 0.38;

  const wetGain = ctx.createGain();
  wetGain.gain.value = 0.42;

  delay.connect(feedback);
  feedback.connect(delay);
  delay.connect(wetGain);
  wetGain.connect(master);

  /* ---- 全局低通，柔化音色 ---- */
  const lowpass = ctx.createBiquadFilter();
  lowpass.type = "lowpass";
  lowpass.frequency.value = 2400;
  lowpass.Q.value = 0.4;
  lowpass.connect(master);
  lowpass.connect(delay);

  /* ---- 和弦进行 ---- */
  const chords = [
    // Cmaj7: C3 E3 G3 B3
    [130.81, 164.81, 196.0, 246.94],
    // Am7: A2 C3 E3 G3
    [110.0, 130.81, 164.81, 196.0],
    // Fmaj7: F2 C3 F3 A3
    [87.31, 130.81, 174.61, 220.0],
    // G: G2 D3 G3 B3
    [98.0, 146.83, 196.0, 246.94],
  ];

  const CHORD_DURATION = 9;   // 每个和弦 9 秒
  const CROSSFADE = 3.5;      // 平滑过渡 3.5 秒

  /* ---- 4 个声部，每个由 2 个略微失谐的正弦波组成 ---- */
  const voices = chords.map(() => {
    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = 220;

    const oscDetune = ctx.createOscillator();
    oscDetune.type = "sine";
    oscDetune.frequency.value = 220.6;

    const gain = ctx.createGain();
    gain.gain.value = 0;

    const gainDetune = ctx.createGain();
    gainDetune.gain.value = 0;

    osc.connect(gain);
    oscDetune.connect(gainDetune);
    gain.connect(lowpass);
    gainDetune.connect(lowpass);

    osc.start();
    oscDetune.start();

    return { osc, oscDetune, gain, gainDetune };
  });

  let chordIndex = 0;

  const applyChord = (index) => {
    const chord = chords[index];
    const now = ctx.currentTime;

    voices.forEach((voice, i) => {
      const freq = chord[i];

      voice.osc.frequency.setTargetAtTime(freq, now, CROSSFADE / 2);
      voice.oscDetune.frequency.setTargetAtTime(
        freq * 1.004,
        now,
        CROSSFADE / 2
      );

      // 低音稍强，高音稍柔
      const baseGain = i === 0 ? 0.085 : 0.06;

      voice.gain.gain.setTargetAtTime(baseGain, now, CROSSFADE / 2);
      voice.gainDetune.gain.setTargetAtTime(
        baseGain * 0.45,
        now,
        CROSSFADE / 2
      );
    });
  };

  /* ---- 随机铃音（五声音阶，C-D-E-G-A）---- */
  const BELL_NOTES = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];

  const playBell = () => {
    const freq = BELL_NOTES[Math.floor(Math.random() * BELL_NOTES.length)];

    const osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = freq;

    const gain = ctx.createGain();
    gain.gain.value = 0;

    osc.connect(gain);
    gain.connect(lowpass);

    const now = ctx.currentTime;
    const dur = 3.5;

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.045, now + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

    osc.start(now);
    osc.stop(now + dur + 0.1);
  };

  let chordTimer = null;
  let bellTimer = null;

  const startLoops = () => {
    applyChord(0);

    chordTimer = setInterval(() => {
      chordIndex = (chordIndex + 1) % chords.length;
      applyChord(chordIndex);
    }, CHORD_DURATION * 1000);

    const scheduleBell = () => {
      const wait = 4000 + Math.random() * 6000; // 4-10 秒随机
      bellTimer = setTimeout(() => {
        playBell();
        scheduleBell();
      }, wait);
    };
    scheduleBell();
  };

  return {
    ctx,
    start: startLoops,
    setVolume: (target, duration = 1.5) => {
      const now = ctx.currentTime;
      master.gain.cancelScheduledValues(now);
      master.gain.setValueAtTime(master.gain.value, now);
      master.gain.linearRampToValueAtTime(target, now + duration);
    },
    resume: () => {
      if (ctx.state === "suspended") ctx.resume();
    },
    dispose: () => {
      if (chordTimer) clearInterval(chordTimer);
      if (bellTimer) clearTimeout(bellTimer);
      voices.forEach((v) => {
        try {
          v.osc.stop();
        } catch (e) {
          /* noop */
        }
        try {
          v.oscDetune.stop();
        } catch (e) {
          /* noop */
        }
      });
      try {
        ctx.close();
      } catch (e) {
        /* noop */
      }
    },
  };
}

/* ==================================================
   ICONS
================================================== */

function SoundOnIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4z" />
      <path d="M15.5 8.5a5 5 0 0 1 0 7" />
      <path d="M19 5a10 10 0 0 1 0 14" />
    </svg>
  );
}

function SoundOffIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4z" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

/* ==================================================
   LANGUAGE SWITCH
================================================== */

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
  { code: "ms", label: "BM" },
];

function LanguageSwitch({ language, onChange }) {
  return (
    <div className="language-switch" role="group" aria-label="Language">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={language === code ? "active" : ""}
          aria-pressed={language === code}
          onClick={() => onChange(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

/* ==================================================
   HEADER
================================================== */

function Header({ language, onLanguageChange, onHome }) {
  return (
    <header className="navbar navbar-simple">
      <button type="button" className="brand" onClick={onHome}>
        <span className="brand-dot" aria-hidden="true" />
        Breath
      </button>

      <LanguageSwitch language={language} onChange={onLanguageChange} />
    </header>
  );
}

/* ==================================================
   APP
================================================== */

function App() {
  const [language, setLanguage] = useState("zh");
  const [stage, setStage] = useState("home");

  const [selectedMethodId, setSelectedMethodId] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);

  const [prepareSeconds, setPrepareSeconds] = useState(PREPARE_SECONDS);

  const [sessionSecondsLeft, setSessionSecondsLeft] = useState(0);
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [phaseSecondsLeft, setPhaseSecondsLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioRef = useRef(null);

  const t = translations[language];

  const selectedMethod = useMemo(
    () => methods.find((method) => method.id === selectedMethodId) ?? null,
    [selectedMethodId]
  );

  const moment = useMemo(() => getMomentRecommendation(), []);
  const momentMethod = useMemo(
    () => methods.find((m) => m.id === moment.methodId) ?? methods[0],
    [moment.methodId]
  );

  /* ---------------- 可靠的滚动 ---------------- */

  const scrollToPractice = useCallback(() => {
    const el = document.getElementById("practice");
    if (!el) return;

    const NAV_OFFSET = 100;
    const top =
      el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;

    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  /* ---------------- Navigation ---------------- */

  const returnHome = useCallback(() => {
    setSelectedMethodId(null);
    setSelectedDuration(null);
    setPrepareSeconds(PREPARE_SECONDS);
    setSessionSecondsLeft(0);
    setPhaseIndex(0);
    setPhaseSecondsLeft(0);
    setIsPaused(false);
    setStage("home");

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const chooseMethod = useCallback((id) => {
    setSelectedMethodId(id);
    setIsPaused(false);
    setStage("setup");
  }, []);

  const startPreparation = useCallback((minutes) => {
    setSelectedDuration(minutes);
    setPrepareSeconds(PREPARE_SECONDS);
    setIsPaused(false);
    setStage("prepare");
  }, []);

  const cancelToSetup = useCallback(() => {
    setIsPaused(false);
    setStage("setup");
  }, []);

  const startBreathing = useCallback(() => {
    if (!selectedMethod || !selectedDuration) return;

    const firstPhase = selectedMethod.phases[0];

    setSessionSecondsLeft(selectedDuration * 60);
    setPhaseIndex(0);
    setPhaseSecondsLeft(firstPhase.duration);
    setIsPaused(false);
    setStage("active");
  }, [selectedMethod, selectedDuration]);

  /* ---------------- 音频控制 ---------------- */

  const toggleAudio = useCallback(() => {
    // 第一次点击时创建音频引擎
    if (!audioRef.current) {
      const engine = createAmbientMusic();
      if (!engine) return;
      engine.start();
      audioRef.current = engine;
    }

    if (audioEnabled) {
      audioRef.current.setVolume(0, 0.8);
      setAudioEnabled(false);
    } else {
      audioRef.current.resume();
      audioRef.current.setVolume(0.55, 1.6);
      setAudioEnabled(true);
    }
  }, [audioEnabled]);

  // 离开 active 阶段时关闭音频并释放资源
  useEffect(() => {
    if (stage !== "active") {
      if (audioRef.current) {
        audioRef.current.dispose();
        audioRef.current = null;
      }
      setAudioEnabled(false);
    }
  }, [stage]);

  // 卸载时彻底清理
  useEffect(() => {
    return () => {
      audioRef.current?.dispose();
      audioRef.current = null;
    };
  }, []);

  /* ---------------- 切换页面时回到顶部 ---------------- */

  useEffect(() => {
    if (stage !== "home") {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [stage]);

  /* ---------------- 准备倒计时 ---------------- */

  useEffect(() => {
    if (stage !== "prepare") return;

    if (prepareSeconds <= 1) {
      const timer = setTimeout(() => startBreathing(), 1000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(
      () => setPrepareSeconds((previous) => previous - 1),
      1000
    );

    return () => clearTimeout(timer);
  }, [stage, prepareSeconds, startBreathing]);

  /* ---------------- 正式练习计时 ---------------- */

  useEffect(() => {
    if (stage !== "active" || isPaused || !selectedMethod) return;

    const timer = setTimeout(() => {
      if (sessionSecondsLeft <= 1) {
        setSessionSecondsLeft(0);
        setIsPaused(false);
        setStage("complete");
        return;
      }

      setSessionSecondsLeft(sessionSecondsLeft - 1);

      if (phaseSecondsLeft <= 1) {
        const next = (phaseIndex + 1) % selectedMethod.phases.length;

        setPhaseIndex(next);
        setPhaseSecondsLeft(selectedMethod.phases[next].duration);
      } else {
        setPhaseSecondsLeft(phaseSecondsLeft - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [
    stage,
    isPaused,
    selectedMethod,
    sessionSecondsLeft,
    phaseSecondsLeft,
    phaseIndex,
  ]);

  /* ==================================================
     PREPARE
  ================================================== */

  if (stage === "prepare" && selectedMethod) {
    const progress = ((PREPARE_SECONDS - prepareSeconds) / PREPARE_SECONDS) * 100;

    return (
      <div className="focus-page">
        <Header
          language={language}
          onLanguageChange={setLanguage}
          onHome={returnHome}
        />

        <main className="prepare-area">
          <p className="overline">{t.prepare}</p>

          <h1>{t.prepareText}</h1>

          <div className="prepare-circle">
            <span>{t.startingIn}</span>
            <strong>{prepareSeconds}</strong>
          </div>

          <div className="prepare-progress">
            <div style={{ width: `${progress}%` }} />
          </div>

          <button
            type="button"
            className="prepare-cancel"
            onClick={cancelToSetup}
          >
            {t.back}
          </button>
        </main>
      </div>
    );
  }

  /* ==================================================
     ACTIVE
  ================================================== */

  if (stage === "active" && selectedMethod) {
    const phase = selectedMethod.phases[phaseIndex];

    const totalSeconds = selectedDuration * 60;
    const progress =
      totalSeconds > 0
        ? ((totalSeconds - sessionSecondsLeft) / totalSeconds) * 100
        : 0;

    return (
      <div className="focus-page">
        <Header
          language={language}
          onLanguageChange={setLanguage}
          onHome={returnHome}
        />

        <div className="session-progress">
          <div style={{ width: `${progress}%` }} />
        </div>

        <main className="active-session">
          <div className="active-meta">
            <p>{t[selectedMethod.nameKey]}</p>

            <div>
              <span>{t.remaining}</span>
              <strong>{formatTime(sessionSecondsLeft)}</strong>
            </div>
          </div>

          <div className="orb-stage">
            <div
              key={phaseIndex}
              className={`breathing-orb ${phase.action}${
                isPaused ? " paused" : ""
              }`}
              style={{
                "--duration": `${phase.duration}s`,
                "--from-scale": phase.from,
                "--to-scale": phase.to,
              }}
            >
              <div className="orb-glow" />

              <div className="orb-core">
                <span>{t[phase.label]}</span>
                <strong>{phaseSecondsLeft}</strong>
              </div>
            </div>
          </div>

          <p className="active-pattern">{selectedMethod.pattern}</p>

          <div className="session-controls">
            <button
              type="button"
              className={`sound-button${audioEnabled ? " active" : ""}`}
              onClick={toggleAudio}
              aria-label={audioEnabled ? t.soundOff : t.soundOn}
              title={audioEnabled ? t.soundOff : t.soundOn}
            >
              {audioEnabled ? <SoundOnIcon /> : <SoundOffIcon />}
            </button>

            <button
              type="button"
              className="dark-button"
              onClick={() => setIsPaused((previous) => !previous)}
            >
              {isPaused ? t.resume : t.pause}
            </button>

            <button
              type="button"
              className="light-button"
              onClick={cancelToSetup}
            >
              {t.end}
            </button>
          </div>
        </main>
      </div>
    );
  }

  /* ==================================================
     COMPLETE
  ================================================== */

  if (stage === "complete" && selectedMethod) {
    return (
      <div className="focus-page">
        <Header
          language={language}
          onLanguageChange={setLanguage}
          onHome={returnHome}
        />

        <main className="complete-card">
          <div className="complete-check" aria-hidden="true">
            ✓
          </div>

          <p className="overline">{t[selectedMethod.nameKey]}</p>

          <h1>{t.complete}</h1>

          <p className="complete-description">{t.completeText}</p>

          <div className="complete-result">
            <span>{t[selectedMethod.nameKey]}</span>
            <strong>{selectedDuration} min</strong>
          </div>

          <button type="button" className="dark-button" onClick={returnHome}>
            {t.done}
          </button>
        </main>
      </div>
    );
  }

  /* ==================================================
     SETUP
  ================================================== */

  if (stage === "setup" && selectedMethod) {
    return (
      <div className="site-shell">
        <Header
          language={language}
          onLanguageChange={setLanguage}
          onHome={returnHome}
        />

        <main className="setup-card">
          <button type="button" className="setup-back" onClick={returnHome}>
            {t.back}
          </button>

          <div className={`setup-preview ${selectedMethod.visual}`}>
            <span>{selectedMethod.number}</span>
          </div>

          <p className="overline">{t.guided}</p>

          <h1>{t[selectedMethod.nameKey]}</h1>

          <p className="setup-description">
            {t[selectedMethod.descriptionKey]}
          </p>

          <div className="pattern-chip">{selectedMethod.pattern}</div>

          <div className="duration-area">
            <h2>{t.chooseDuration}</h2>
            <p>{t.durationHint}</p>

            <div className="duration-grid">
              {[1, 3].map((minutes) => (
                <button
                  key={minutes}
                  type="button"
                  onClick={() => startPreparation(minutes)}
                >
                  <strong>{minutes}</strong>
                  <span>MIN</span>
                </button>
              ))}
            </div>
          </div>
        </main>
      </div>
    );
  }

  /* ==================================================
     HOME
  ================================================== */

  return (
    <div className="site-shell">
      <Header
        language={language}
        onLanguageChange={setLanguage}
        onHome={returnHome}
      />

      <main>
        {/* HERO */}
        <section id="home" className="premium-hero">
          <div className="hero-copy">
            <p className="overline">{t.eyebrow}</p>

            <h1>{t.title}</h1>

            <p className="hero-subtitle">{t.subtitle}</p>

            <button
              type="button"
              className="hero-button"
              onClick={scrollToPractice}
            >
              {t.start}
            </button>
          </div>

          <div className="hero-center">
            <div className="main-orb">
              <div className="main-orb-ring">
                <div className="main-orb-core">Breathe</div>
              </div>
            </div>
          </div>

          <div className="hero-message">
            <p>{t.sideTitle}</p>
            <p>{t.sideText}</p>

            <div className="short-line" />

            <span>
              A CALMER MIND
              <br />
              A BRIGHTER YOU
            </span>
          </div>

          <div className="decorative-leaf leaf-one" aria-hidden="true" />
          <div className="decorative-leaf leaf-two" aria-hidden="true" />
        </section>

        {/* PRACTICE */}
        <section id="practice" className="practice-panel">
          <div className="practice-header">
            <div>
              <h2>{t.exercises}</h2>
              <p>{t.exerciseSubtitle}</p>
            </div>

            <span>{t.methods}</span>
          </div>

          <div className="practice-grid">
            {methods.map((method) => (
              <article className="practice-card" key={method.id}>
                <button
                  type="button"
                  className="card-click-area"
                  onClick={() => chooseMethod(method.id)}
                >
                  <span className={`card-visual ${method.visual}`}>
                    <span className="visual-number">{method.number}</span>

                    <span className="visual-icon" aria-hidden="true">
                      {method.icon}
                    </span>

                    {method.id === "box" && (
                      <span className="stones">
                        <span />
                        <span />
                        <span />
                      </span>
                    )}

                    {method.id === "slow" && (
                      <span className="slow-waves">
                        <span />
                        <span />
                        <span />
                      </span>
                    )}

                    {method.id === "cyclic" && (
                      <span className="water-waves">
                        <span />
                        <span />
                      </span>
                    )}

                    {method.id === "478" && (
                      <span className="moon" aria-hidden="true">
                        ☾
                      </span>
                    )}
                  </span>

                  <span className="card-body">
                    <span className="card-title">{t[method.nameKey]}</span>

                    <span className="card-desc">
                      {t[method.descriptionKey]}
                    </span>

                    <span className="pattern">{method.pattern}</span>

                    <span className="details-button">{t.view}</span>
                  </span>
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* ABOUT + INTENT PICKER */}
        <section id="about" className="about-section">
          <p className="overline">{t.aboutEyebrow}</p>
          <h2>{t.aboutTitle}</h2>
          <p className="about-text">{t.aboutText}</p>

          <div className="intent-picker">
            <p className="intent-title">{t.intentTitle}</p>

            <div className="intent-grid">
              <button type="button" onClick={() => chooseMethod("slow")}>
                <span className="intent-icon" aria-hidden="true">
                  ⌁
                </span>
                <strong>{t.intentRelax}</strong>
                <span className="intent-hint">{t.intentRelaxHint}</span>
              </button>

              <button type="button" onClick={() => chooseMethod("box")}>
                <span className="intent-icon" aria-hidden="true">
                  □
                </span>
                <strong>{t.intentFocus}</strong>
                <span className="intent-hint">{t.intentFocusHint}</span>
              </button>

              <button type="button" onClick={() => chooseMethod("478")}>
                <span className="intent-icon" aria-hidden="true">
                  ☾
                </span>
                <strong>{t.intentSleep}</strong>
                <span className="intent-hint">{t.intentSleepHint}</span>
              </button>
            </div>
          </div>
        </section>

        {/* MOMENT — 时段感知推荐 */}
        <section className={`moment-card moment-${moment.period}`}>
          <div className="moment-head">
            <div className="moment-badge">
              <span className="moment-icon" aria-hidden="true">
                {moment.icon}
              </span>
              <span className="moment-period">
                {t.momentEyebrow} · {t[moment.periodLabelKey]}
              </span>
            </div>

            <span className="moment-method-number">
              {momentMethod.number}
            </span>
          </div>

          <div className="moment-body">
            <div className="moment-copy">
              <h3>{t[momentMethod.nameKey]}</h3>
              <p>{t[moment.reasonKey]}</p>
            </div>

            <button
              type="button"
              className="moment-action"
              onClick={() => chooseMethod(momentMethod.id)}
            >
              {t.momentAction}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;