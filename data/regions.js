/**
 * 交互式大脑解剖图谱 — 脑区数据
 * 面向心理学研究生，包含 8 层信息：
 *   1. 解剖位置  2. 细胞构筑  3. 主要功能  4. 连接组
 *   5. 神经递质  6. 临床关联  7. 关键研究  8. 亚核细节
 *
 * 脑区按功能系统分组，颜色编码：
 *   前额叶系统  → 紫色系 (#7C6FCF)
 *   边缘系统    → 珊瑚色系 (#E17055)
 *   纹状体/奖赏 → 橙色系 (#E8913A)
 *   运动系统    → 蓝色系 (#4A9EAA)
 *   感觉系统    → 绿色系 (#00A896)
 *   脑干/调节   → 黄色系 (#D4A832)
 *   白质/连接   → 灰色系 (#8E8E9A)
 */

const brainRegions = [
  // ==================== 前额叶系统 (紫色) ====================
  {
    id: "dlpfc",
    name: "背外侧前额叶皮层",
    nameEn: "Dorsolateral Prefrontal Cortex (dlPFC)",
    system: "prefrontal",
    systemName: "前额叶系统",
    color: "#7C6FCF",
    position3D: [32, 42, 30],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "额叶外侧面，包括额中回的大部分，Brodmann 9 区和 46 区",
        appearance: "高度折叠的皮层区域，六层新皮层结构",
        relations: "上方: 额上回 (BA 8) | 下方: 额下回 (Broca区) | 后方: 前运动皮层 (BA 6)",
        size: "人类中约占前额叶皮层的 50%"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "BA 46", desc: "颗粒型皮层，第IV层（颗粒层）发达，接收大量丘脑输入" },
          { name: "BA 9", desc: "颗粒型皮层，第III层锥体细胞大，投射到其他皮层区域" }
        ],
        cellTypes: ["锥体神经元 (第III/V层)", "颗粒细胞 (第IV层)", "PV+ 篮状细胞 (快速放电)", "SST+ 马丁诺蒂细胞", "VIP+ 双 bouquet 细胞"],
        layers: "典型的六层新皮层，第III和第V层特别厚（长程投射）"
      },
      functions: {
        primary: "执行功能的核心枢纽：工作记忆、认知灵活性、计划与目标导向行为",
        computational: "维持和操作工作记忆表征、自上而下调节后部皮层活动、冲突监控和任务切换",
        paradigms: ["N-back 任务 (工作记忆)", "威斯康辛卡片分类测验 (认知灵活性)", "Stroop 任务 (抑制控制)", "延迟匹配样本任务"],
        dissociations: "左侧 dlPFC → 语言工作记忆 | 右侧 dlPFC → 空间工作记忆 | BA46 → 维持信息 | BA9 → 操作信息",
        networks: ["中央执行网络 (CEN)", "额顶控制网络 (FPCN)"]
      },
      connectivity: {
        inputs: ["丘脑背内侧核 (MD)", "后顶叶皮层 (信息输入)", "前运动皮层", "前扣带皮层 (ACC)"],
        outputs: ["运动皮层 (行为执行)", "后顶叶皮层 (注意力调制)", "纹状体 (认知控制环路)", "丘脑"],
        keyCircuits: ["dlPFC ↔ 后顶叶 → 工作记忆环路", "dlPFC → 纹状体 → 丘脑 → dlPFC (认知控制 CSTC 环路)"],
        connectivityDiagram: "dlpfc"
      },
      neurotransmitters: ["谷氨酸 (锥体神经元, 主要输出)", "GABA (中间神经元, 局部抑制)", "多巴胺 (VTA→dlPFC, D1受体, 调节工作记忆)", "去甲肾上腺素 (LC→dlPFC, α2A受体, 增强信噪比)"],
      clinicalRelevance: {
        disorders: ["精神分裂症 (dlPFC 低活性 → 工作记忆缺陷、执行功能障碍)", "ADHD (dlPFC 发育延迟)", "抑郁症 (dlPFC 低活性 → 认知迟缓)", "双相障碍", "额颞叶痴呆"],
        symptoms: "dlPFC 功能障碍 → 计划困难、注意力分散、无法抑制无关刺激、决策能力下降",
        treatments: ["TMS 靶点 (左 dlPFC, 抑郁症治疗)", "tDCS 增强工作记忆", "认知训练 (Cogmed等)", "COMT 抑制剂 (增加前额叶 DA)"],
        keyNote: "dlPFC 是精神分裂症认知缺陷的核心脑区——患者在需要工作记忆操作的 N-back 任务中表现出 dlPFC 低激活"
      },
      research: {
        classicPapers: [
          { author: "Goldman-Rakic PS (1995)", title: "Cellular basis of working memory", journal: "Neuron", doi: "10.1016/0896-6273(95)90304-6" },
          { author: "Miller EK & Cohen JD (2001)", title: "An integrative theory of prefrontal cortex function", journal: "Annu Rev Neurosci", doi: "10.1146/annurev.neuro.24.1.167" }
        ],
        recentFindings: "dlPFC 神经元群体动态编码 (population coding) 而非单个神经元编码特定记忆项 (Nature 2023); 经颅交流电刺激 (tACS) 同步 dlPFC 和后顶叶 θ 波可增强工作记忆 (Science 2024)",
        debates: "dlPFC 是存储工作记忆内容还是操控其他脑区中的表征？Goldman-Rakic (存储) vs Postle (操控) 争论持续中"
      }
    }
  },

  {
    id: "vmpfc",
    name: "腹内侧前额叶皮层",
    nameEn: "Ventromedial Prefrontal Cortex (vmPFC)",
    system: "prefrontal",
    systemName: "前额叶系统",
    color: "#9B8FDE",
    position3D: [8, 46, -18],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "额叶内侧面和腹侧，包括 BA 10、11、14、25 以及内侧额极区域",
        appearance: "平滑的眶面皮层，接受大量边缘系统输入",
        relations: "上方: dlPFC | 后方: 前扣带皮层 | 下方: 眶额皮层",
        size: "占据额极区域，在人类中特别发达"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "BA 10 (额极皮层)", desc: "颗粒型皮层，第IV层明显，参与高阶整合" },
          { name: "BA 11/14 (眶回)", desc: "颗粒型皮层，接收嗅觉和味觉输入" },
          { name: "BA 25 (亚膝前扣带)", desc: "无颗粒型皮层（agranular），与自主神经系统强连接" }
        ],
        cellTypes: ["锥体神经元 (长程投射至纹状体和下丘脑)", "多种中间神经元亚型"],
        note: "与 dlPFC 相比，vmPFC 的颗粒层较薄，但边缘系统输入更丰富"
      },
      functions: {
        primary: "情绪调节、价值计算、决策（特别是基于价值的决策）、社会认知",
        computational: "计算刺激和行动的主观价值、整合感觉和情绪信息指导选择、恐惧消退学习",
        paradigms: ["爱荷华赌博任务 (Iowa Gambling Task)", "延迟折扣任务", "恐惧消退范式", "道德判断任务"],
        dissociations: "vmPFC → 价值整合和情绪调节 | dlPFC → 认知控制和执行功能 | OFC → 刺激-奖赏关联更新",
        networks: ["默认模式网络 (DMN)", "奖赏网络"]
      },
      connectivity: {
        inputs: ["杏仁核 (BLA)", "海马体 (CA1/下托)", "脑岛 (前部)", "颞极", "中脑多巴胺系统 (VTA)"],
        outputs: ["纹状体 (NAc)", "下丘脑 (外侧)", "导水管周围灰质 (PAG)", "杏仁核 (CeA, 间接调节恐惧表达)"],
        keyCircuits: ["vmPFC → 杏仁核 (恐惧消退通路, 通过 ITC 细胞)", "vmPFC → NAc (奖赏期待和价值信号)", "杏仁核 ↔ vmPFC ↔ 海马体 (情绪记忆调节环路)"],
        connectivityDiagram: "vmpfc"
      },
      neurotransmitters: ["谷氨酸 (主输出)", "GABA (局部抑制)", "多巴胺 (D1/D2, 奖赏预测误差)", "5-羟色胺 (5-HT1A/2A, 情绪调节)", "去甲肾上腺素"],
      clinicalRelevance: {
        disorders: ["重度抑郁症 (sgACC/BA25 过度活跃 → 深部脑刺激靶点)", "PTSD (vmPFC 对杏仁核的抑制不足)", "焦虑障碍 (恐惧消退缺陷)", "成瘾 (价值计算异常)", "反社会人格障碍 (vmPFC 结构/功能异常)"],
        symptoms: "vmPFC 损伤 → 情绪调节困难、社会决策能力下降、不能从惩罚中学习 (如 Phineas Gage 案例)",
        treatments: ["DBS 靶点 (BA25, 难治性抑郁症)", "CBT (增强 vmPFC-杏仁核功能连接)", "SSRI (调节 vmPFC 5-HT 系统)"],
        keyNote: "sgACC (BA25) 在抑郁症中持续过度活跃——Mayberg 等首次将 DBS 应用于此靶点治疗难治性抑郁症 (Neuron 2005)"
      },
      research: {
        classicPapers: [
          { author: "Damasio AR (1994)", title: "Descartes' Error: Emotion, Reason, and the Human Brain", journal: "Book (Putnam)" },
          { author: "Bechara A et al. (1994)", title: "Insensitivity to future consequences following damage to human prefrontal cortex", journal: "Cognition", doi: "10.1016/0010-0277(94)90018-3" },
          { author: "Mayberg HS et al. (2005)", title: "Deep brain stimulation for treatment-resistant depression", journal: "Neuron", doi: "10.1016/j.neuron.2005.02.014" }
        ],
        recentFindings: "vmPFC 神经元编码'认知地图'式的抽象价值空间，而非单一标量价值 (Cell 2024); vmPFC→杏仁核投射的化学遗传学激活足以消除习得性恐惧 (Nature Neuroscience 2023)",
        debates: "vmPFC 计算的是'目标价值'还是'行动价值'？与 OFC 的价值计算功能如何分工？"
      }
    }
  },

  {
    id: "ofc",
    name: "眶额皮层",
    nameEn: "Orbitofrontal Cortex (OFC)",
    system: "prefrontal",
    systemName: "前额叶系统",
    color: "#A79DE0",
    position3D: [24, 40, -24],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "额叶眶面，眼眶上方，BA 11、12、13、47",
        appearance: "位于前颅窝底部，与嗅觉系统相邻",
        relations: "上方: vmPFC | 内侧: 嗅觉皮层 | 后方: 前脑岛",
        size: "人类中约占前额叶的 15%"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "内侧 OFC (BA 13/14)", desc: "接收内脏感觉输入，编码初级奖赏价值" },
          { name: "中央 OFC (BA 11/13)", desc: "整合多模态感觉信息与价值信号" },
          { name: "外侧 OFC (BA 12/47)", desc: "编码惩罚和负性结果，参与行为抑制" }
        ],
        cellTypes: ["锥体神经元", "中间神经元", "颗粒细胞 (第IV层)"],
        note: "OFC 是少数接收所有五种感觉模态输入的脑区之一"
      },
      functions: {
        primary: "刺激-结果关联学习、奖赏价值更新、经济决策、预期误差计算",
        computational: "编码预期价值 (expected value)、奖赏预测误差、刺激-结果关联的快速更新",
        paradigms: ["概率反转学习 (Probabilistic Reversal Learning)", "感觉特异性饱足 (Sensory-Specific Satiety)", "延迟折扣任务", "信任游戏 (Trust Game)"],
        dissociations: "内侧 OFC → 奖赏编码 | 外侧 OFC → 惩罚/非奖赏编码 | vmPFC → 价值比较和选择 | OFC → 价值更新",
        networks: ["奖赏网络", "眶额-纹状体环路"]
      },
      connectivity: {
        inputs: ["所有感觉模态皮层 (视觉/听觉/体感/味觉/嗅觉)", "杏仁核 (BLA)", "中脑多巴胺神经元 (VTA/SNc)", "丘脑背内侧核"],
        outputs: ["纹状体 (尾状核/NAc)", "前扣带皮层 (ACC)", "杏仁核 (BLA)", "外侧下丘脑"],
        keyCircuits: ["OFC → 纹状体 (刺激-结果关联 → 习惯形成)", "杏仁核 → OFC → 纹状体 (情绪价值 → 决策)"],
        connectivityDiagram: "ofc"
      },
      neurotransmitters: ["多巴胺 (奖赏预测误差)", "5-羟色胺 (惩罚信号, 5-HT2C)", "谷氨酸", "GABA"],
      clinicalRelevance: {
        disorders: ["强迫症 (OCD, OFC-纹状体环路过度活跃)", "成瘾 (OFC 价值编码紊乱)", "抑郁症 (OFC 奖赏反应降低)", "进食障碍 (OFC 对食物价值编码异常)", "反社会人格障碍 (OFC 结构异常)"],
        symptoms: "OFC 损伤 → 冲动行为、无法根据反馈调整行为、奖赏/惩罚辨别困难",
        treatments: ["DBS (OCD, 内囊前肢/NAc 靶点)", "SSRI (OCD 一线治疗)", "CBT (暴露与反应预防)"],
        keyNote: "OFC 过度活跃是 OCD 的核心神经病理特征——患者无法'关闭'对潜在威胁/错误的监控"
      },
      research: {
        classicPapers: [
          { author: "Rolls ET (2000)", title: "The orbitofrontal cortex and reward", journal: "Cerebral Cortex", doi: "10.1093/cercor/10.3.284" },
          { author: "Schoenbaum G et al. (2009)", title: "A new perspective on the role of the orbitofrontal cortex in adaptive behaviour", journal: "Nature Reviews Neuroscience", doi: "10.1038/nrn2753" }
        ],
        recentFindings: "OFC 神经元编码抽象'状态空间' (state space) 而非具体刺激特征——这解释了为什么 OFC 损伤者不能利用任务结构推理 (Nature 2024)",
        debates: "OFC 编码的是经济价值本身还是更广义的'任务状态'表征？"
      }
    }
  },

  {
    id: "acc",
    name: "前扣带皮层",
    nameEn: "Anterior Cingulate Cortex (ACC)",
    system: "prefrontal",
    systemName: "前额叶系统",
    color: "#7C7CCF",
    position3D: [6, 36, 22],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "扣带回前部，胼胝体上方，BA 24/32/33",
        appearance: "位于大脑内侧面，紧邻胼胝体上方和前方",
        relations: "前方: vmPFC | 后方: 中扣带皮层 (MCC) | 上方: 辅助运动区 | 下方: 胼胝体",
        size: "扣带皮层前三分之二"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "背侧 ACC (dACC, BA 24b'/32')", desc: "与认知控制和冲突监控相关，投射至运动区" },
          { name: "喙侧 ACC (rACC, BA 24a/32a)", desc: "与情绪冲突和情绪调节相关" },
          { name: "亚膝 ACC (sgACC, BA 25)", desc: "与自主神经调节和情绪相关，抑郁症关键区" }
        ],
        cellTypes: ["锥体神经元 (第V层含 Von Economo 神经元——仅在人类/类人猿中存在)", "梭形神经元 (Von Economo)", "多种中间神经元"],
        special: "ACC 是少数含 Von Economo 神经元 (VENs) 的脑区之一，这些大型梭形神经元被认为支持快速长程信息传递"
      },
      functions: {
        primary: "冲突监控、错误检测、认知控制、疼痛的情感成分",
        computational: "计算反应冲突和错误可能性、评估行动结果与预期之间的差异、调节认知资源的分配",
        paradigms: ["Stroop 任务 (反应冲突)", "Flanker 任务", "错误相关负波 (ERN/Ne)", "疼痛刺激 (热/电)"],
        dissociations: "dACC → 认知冲突 (Stroop, Flanker) | rACC → 情绪冲突 (情绪 Stroop) | sgACC → 自主神经输出",
        networks: ["突显网络 (Salience Network)", "中央执行网络 (CEN)"]
      },
      connectivity: {
        inputs: ["OFC (价值信号)", "dlPFC (认知信息)", "杏仁核 (情绪显著性)", "脑岛 (内感受)", "丘脑中线核"],
        outputs: ["运动皮层/辅助运动区 (行为调整)", "脑岛", "杏仁核", "中脑导水管周围灰质 (PAG)", "自主神经脑干核"],
        keyCircuits: ["dACC → dlPFC (冲突信号 → 增强认知控制)", "ACC → MCC → 运动区 (错误 → 行为调整)", "sgACC → PAG/脑干 (情绪 → 自主神经输出)"],
        connectivityDiagram: "acc"
      },
      neurotransmitters: ["谷氨酸 (主输出)", "GABA (局部抑制)", "多巴胺 (D2/D4, 认知灵活性)", "5-羟色胺 (情绪调节)", "去甲肾上腺素 (警觉信号)"],
      clinicalRelevance: {
        disorders: ["抑郁症 (sgACC 过度活跃; rACC 活性异常)", "OCD (dACC 过度活跃→持续错误信号)", "焦虑障碍 (rACC 情绪调节缺陷)", "慢性疼痛 (dACC 疼痛情感成分增强)", "PTSD (rACC 对杏仁核抑制不足)"],
        symptoms: "dACC 过度活跃 → 持续感到'事情不对劲'、过度自我监控、慢性担忧/反刍",
        treatments: ["DBS (sgACC, 抑郁症)", "CBT + 正念 (调节 ACC 活性)", "SNRI (增加 NA 增强 ACC 功能)"],
        keyNote: "ERN (错误相关负波) 是 dACC 功能的著名 EEG 指标——在焦虑障碍中 ERN 振幅增高，反映对错误的过度敏感"
      },
      research: {
        classicPapers: [
          { author: "Botvinick MM et al. (2001)", title: "Conflict monitoring and cognitive control", journal: "Psychological Review", doi: "10.1037/0033-295X.108.3.624" },
          { author: "Bush G, Luu P & Posner MI (2000)", title: "Cognitive and emotional influences in anterior cingulate cortex", journal: "Trends in Cognitive Sciences", doi: "10.1016/S1364-6613(00)01483-2" }
        ],
        recentFindings: "dACC 神经元编码'预期不确定性的量级'而非冲突本身 (Neuron 2024); 单细胞记录显示 dACC 在错误后增加了后续试次的反应时间阈值",
        debates: "dACC 是计算'冲突'还是'努力成本'还是'意外程度'？不同的计算理论仍存在激烈争论"
      }
    }
  },

  {
    id: "insula",
    name: "脑岛",
    nameEn: "Insula (Insular Cortex)",
    system: "prefrontal",
    systemName: "前额叶系统",
    color: "#8E7CCF",
    position3D: [36, 10, 8],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "位于外侧裂深处，被额叶、颞叶和顶叶岛盖覆盖",
        appearance: "三角形/金字塔形皮层区域，隐藏在外侧裂底部",
        relations: "上方: 额叶岛盖 | 下方: 颞叶岛盖 | 后方: 颞横回",
        size: "人类中约占总皮层面积的 2%"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "后部颗粒型脑岛 (posterior granular)", desc: "接收内感受信号 (心血管、胃肠道、呼吸)" },
          { name: "中部无颗粒型脑岛 (mid-dysgranular)", desc: "整合内感受与外感受信息" },
          { name: "前部无颗粒型脑岛 (anterior agranular)", desc: "与情绪意识、主观感受、决策相关" }
        ],
        cellTypes: ["锥体神经元", "Von Economo 神经元 (前部脑岛)", "多种中间神经元"],
        special: "前部脑岛含 Von Economo 神经元，被认为参与快速直觉判断和情绪意识"
      },
      functions: {
        primary: "内感受知觉、情绪意识、主观感受体验的神经基础",
        computational: "预测编码——整合自下而上的内感受信号与自上而下的预测，生成情绪体验; 显著性检测",
        paradigms: ["心跳知觉任务 (heartbeat detection)", "同理心任务 (疼痛共情)", "爱荷华赌博任务 (躯体标记)", "情绪面孔识别"],
        dissociations: "后部脑岛 → 客观内感受 (心跳、呼吸、温度) | 前部脑岛 → 主观感受 (我'感到'焦虑/恶心/兴奋)",
        networks: ["突显网络 (Salience Network)", "默认模式网络 (DMN)"]
      },
      connectivity: {
        inputs: ["丘脑 (VMpo, 内感受丘脑通路)", "杏仁核 (BLA)", "OFC", "ACC", "体感皮层 (S2)"],
        outputs: ["ACC (显著性信号→冲突监控)", "杏仁核", "下丘脑 (自主神经输出)", "纹状体"],
        keyCircuits: ["脑岛 → dACC (内感受显著性 → 认知控制)", "后部脑岛 → 前部脑岛 (逐步内感受整合)", "脑岛 ↔ 杏仁核 (内感受 ↔ 情绪的双向调制)"],
        connectivityDiagram: "insula"
      },
      neurotransmitters: ["谷氨酸", "GABA", "多巴胺", "5-羟色胺", "去甲肾上腺素 (NA 增强内感受信号)"],
      clinicalRelevance: {
        disorders: ["焦虑障碍 (前部脑岛过度活跃→内感受过敏)", "惊恐障碍 (脑岛→强烈躯体感觉→恐惧恶性循环)", "抑郁症 (前部脑岛活性异常)", "进食障碍 (脑岛对饱足信号处理异常)", "成瘾 (戒断时脑岛→强烈渴求)", "PTSD (内感受敏感性增高)"],
        symptoms: "前部脑岛过度活跃 → 对身体感觉过敏、灾难化解释躯体症状、内感受准确性降低 (但主观感觉增高)",
        treatments: ["正念训练 (增强脑岛内感受调节)", "CBT (重构内感受认知)", "SSRI"],
        keyNote: "焦虑患者常有'内感受恐惧' (fear of interoceptive sensations)——前部脑岛放大无害的躯体信号并错误标记为威胁"
      },
      research: {
        classicPapers: [
          { author: "Craig AD (2002)", title: "How do you feel? Interoception: the sense of the physiological condition of the body", journal: "Nature Reviews Neuroscience", doi: "10.1038/nrn894" },
          { author: "Critchley HD et al. (2004)", title: "Neural systems supporting interoceptive awareness", journal: "Nature Neuroscience", doi: "10.1038/nn1176" }
        ],
        recentFindings: "脑岛神经元编码'全身生理状态地图' (interoceptive body map)，不同区域对应不同内脏 (Nature 2024); 前脑岛抑制性中间神经元功能障碍可能是焦虑障碍的细胞基础",
        debates: "脑岛是'意识感受'的必要条件吗？Craig 认为是，但全局工作空间理论 (Dehaene) 认为前额叶才是关键"
      }
    }
  },

  // ==================== 边缘系统 (珊瑚色) ====================
  {
    id: "amygdala",
    name: "杏仁核",
    nameEn: "Amygdala",
    system: "limbic",
    systemName: "边缘系统",
    color: "#E17055",
    position3D: [24, -4, -18],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "颞叶内侧前部，海马体前方，侧脑室下角尖端上方",
        appearance: "杏仁状灰质核团，约 1.5 cm³ 体积",
        relations: "前方: 颞极 | 后方: 海马体头部 | 内侧: 嗅皮层/内嗅皮层 | 上方: 苍白球/壳核",
        size: "人类中约 1.2-1.5 cm³，包含至少 13 个亚核"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "基底外侧核 (BLA)", desc: "包括外侧核 (LA)、基底核 (BA)、副基底核 (AB)。类似皮层结构 (谷氨酸能主神经元, ~80%)。BLA 是感觉信息进入杏仁核的主要入口。" },
          { name: "中央内侧核 (CeA)", desc: "包括中央内侧 (CeM) 和中央外侧 (CeL)。类似纹状体结构 (GABA 能神经元)。CeA 是杏仁核的主要输出站。" },
          { name: "皮层内侧核 (CMA)", desc: "接收嗅球和犁鼻器输入，处理嗅觉和化学感觉信息。" },
          { name: "间质细胞团 (ITC)", desc: "位于 BLA 和 CeA 之间的 GABA 能细胞群，在恐惧消退中起关键闸门作用。" }
        ],
        cellTypes: ["BLA: 谷氨酸能锥体样主神经元 (~80%), GABA 能中间神经元 (~20%)", "CeA: GABA 能中棘神经元", "ITC: GABA 能神经元"],
        special: "BLA 锥体神经元表现出独特的'低 firing 率+高爆发'放电模式，可能有助于显著性检测"
      },
      functions: {
        primary: "情绪学习与记忆，特别是恐惧条件化和食欲条件化; 显著性检测; 社会认知",
        computational: "将中性刺激与生物显著结果关联 (CS-US 关联); 编码刺激的'价值'而非刺激本身; 调节记忆巩固 (通过应激激素调制海马体)",
        paradigms: ["恐惧条件化 (Pavlovian fear conditioning)", "恐惧消退 (fear extinction)", "情绪面孔识别 (特别是恐惧面孔)", "情绪增强记忆 (emotional enhancement of memory)", "信任判断"],
        dissociations: "BLA → 情绪学习、记忆巩固 | CeA → 情绪表达 (冻结、自主神经、激素) | LA → 可塑性位点 (CS-US 关联存储) | CeL → 恐惧抑制 ('关'信号)",
        networks: ["边缘系统", "突显网络"]
      },
      connectivity: {
        inputs: ["感觉丘脑 (MGN/PIN, 快速'低通路')", "感觉皮层 (慢速'高通路')", "海马体 (情境信息)", "vmPFC (情绪调节)", "前脑岛 (内感受)", "嗅球 (CMA)"],
        outputs: ["下丘脑 (自主神经反应)", "PAG (冻结行为)", "纹状体/NAc (动机行为)", "前额叶 (vmPFC/ACC)", "脑干 (LC, 中缝核 — 神经调节)", "海马体 (调节记忆巩固)"],
        keyCircuits: ["BLA → CeM → 下丘脑/PAG (恐惧表达输出)", "感觉丘脑 → LA (快速恐惧学习, 单突触)", "vmPFC → ITC → CeA (恐惧消退抑制)", "BLA → NAc (奖赏学习)"],
        connectivityDiagram: "amygdala"
      },
      neurotransmitters: ["谷氨酸 (BLA 主神经元, 主要输出)", "GABA (CeA, ITC, 局部抑制)", "多巴胺 (VTA→BLA, 奖赏学习)", "去甲肾上腺素 (LC→BLA, 情绪记忆巩固)", "5-羟色胺 (中缝核→BLA, 焦虑调节)", "糖皮质激素 (应激→增强 BLA 活性)", "神经肽 Y (抗焦虑)"],
      clinicalRelevance: {
        disorders: ["焦虑障碍 (BLA 过度活跃→威胁泛化)", "PTSD (杏仁核过度活跃+vmPFC 抑制不足)", "抑郁症 (杏仁核体积增大/活性增高)", "边缘性人格障碍 (杏仁核对社会刺激过敏)", "自闭症谱系 (杏仁核对社交刺激反应异常)", "Urbach-Wiethe 病 (杏仁核钙化→不能识别恐惧)"],
        symptoms: "杏仁核过度活跃 → 威胁敏感性增高、恐惧泛化、过度警觉、闯入性记忆; 杏仁核损伤 → 不能识别他人恐惧表情、社会判断力降低 (但智力保留)",
        treatments: ["SSRI (增加杏仁核 5-HT, 促进 BLA→CeA GABA 能抑制)", "CBT/暴露疗法 (增强 vmPFC→杏仁核抑制)", "DBS (杏仁核/内囊, OCD)", "普萘洛尔 (阻断 NA, 破坏重新巩固, PTSD)"],
        keyNote: "患者 S.M. (双侧杏仁核钙化) 完全不能识别面部恐惧表情，但她仍能感受自身的恐惧 (CO₂挑战)——说明杏仁核对'识别'他人恐惧必要，但对'体验'自身恐惧并非唯一通路"
      },
      research: {
        classicPapers: [
          { author: "LeDoux JE (2000)", title: "Emotion circuits in the brain", journal: "Annual Review of Neuroscience", doi: "10.1146/annurev.neuro.23.1.155" },
          { author: "Phelps EA & LeDoux JE (2005)", title: "Contributions of the amygdala to emotion processing: From animal models to human behavior", journal: "Neuron", doi: "10.1016/j.neuron.2005.09.025" },
          { author: "Adolphs R et al. (1994)", title: "Impaired recognition of emotion in facial expressions following bilateral damage to the human amygdala", journal: "Nature", doi: "10.1038/372669a0" }
        ],
        recentFindings: "BLA→CeA 投射的分子定义亚群：Rspo2+ 神经元控制恐惧 (向 CeM)，而 Ppp1r1b+ 神经元控制奖赏 (向 NAc) (Cell 2024); 化学遗传学抑制 BLA 去极化足以巩固非恐惧记忆 (Science 2023)",
        debates: "杏仁核是'恐惧中心'还是'显著性检测器'？LeDoux 认为杏仁核是'无意识威胁检测器'，恐惧感受需要皮层参与; 而某些研究者认为杏仁核直接参与恐惧感受"
      }
    }
  },

  {
    id: "hippocampus",
    name: "海马体",
    nameEn: "Hippocampus",
    system: "limbic",
    systemName: "边缘系统",
    color: "#E88A6E",
    position3D: [26, -14, -16],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "颞叶内侧，侧脑室下角的底部，杏仁核后方",
        appearance: "卷曲的管状结构 (~4cm 长)，因形似海马 (seahorse) 而得名",
        relations: "前方: 杏仁核 | 上方: 侧脑室 | 后方: 脾后皮层 | 内侧: 海马沟",
        size: "人类中约 3-4 cm³ 每侧"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "齿状回 (DG)", desc: "海马体的'入口'。含颗粒细胞，是成人脑中少数有神经发生的区域之一。执行模式分离 (pattern separation)。" },
          { name: "CA3", desc: "含大型锥体神经元。拥有广泛的循环侧支 (recurrent collaterals)，执行模式完成 (pattern completion)。" },
          { name: "CA2", desc: "介于 CA3 和 CA1 之间的小区域，表达 RGS14 蛋白。在社会记忆 (social memory) 中起特殊作用。" },
          { name: "CA1", desc: "海马体的主要输出站。含小型锥体神经元。整合 DG→CA3 输入并向内嗅皮层/下托输出。" },
          { name: "下托 (Subiculum)", desc: "CA1 和内嗅皮层之间的过渡区，海马体的主要输出通道。" },
          { name: "内嗅皮层 (EC)", desc: "海马体和新皮层之间的主要接口。内侧 EC (空间信息) vs 外侧 EC (物体信息)。" }
        ],
        cellTypes: ["DG: 颗粒细胞", "CA3: 大型锥体神经元 (thorny excrescences)", "CA1: 小型锥体神经元", "下托: 锥体神经元", "多种 GABA 能中间神经元 (PV+, SST+, CCK+)"],
        special: "DG 颗粒细胞是成人脑内少数终身产生的神经元——每天约新增 700 个 (人类)。神经发生受运动、抗抑郁药、丰富环境促进，受应激抑制。"
      },
      functions: {
        primary: "情景记忆形成与巩固、空间导航、模式分离与完成、情境恐惧条件化",
        computational: "模式分离 (DG, 将相似记忆分开) ↔ 模式完成 (CA3, 从部分线索恢复完整记忆); 认知地图 (place cells, grid cells); 记忆巩固 (sharp-wave ripples, 向皮层重放)",
        paradigms: ["Morris 水迷宫 (空间记忆)", "延迟非匹配样本任务 (识别记忆)", "恐惧条件化 (情境恐惧)", "配对联想学习 (关联记忆)", "认知地图任务 (虚拟导航)"],
        dissociations: "左侧海马 → 语言/语义记忆 | 右侧海马 → 空间记忆 | DG → 模式分离 | CA3 → 模式完成 | 前部海马 → 情绪/焦虑 | 后部海马 → 空间/认知",
        networks: ["默认模式网络 (DMN)", "边缘系统"]
      },
      connectivity: {
        inputs: ["内嗅皮层 (EC, 主要皮层输入, 通过穿通通路)", "杏仁核 (BLA, 情绪调制)", "隔核 (内侧隔核→θ 节律)", "丘脑前核", "蓝斑 (NA)", "中缝核 (5-HT)"],
        outputs: ["内嗅皮层 (返回皮层)", "下托→穹窿→乳头体/丘脑前核 (Papez 环路)", "杏仁核 (情境恐惧)", "vmPFC/OFC", "NAc (空间导航→动机)"],
        keyCircuits: ["三突触环路: EC→DG→CA3→CA1→下托→EC", "Papez 环路: 海马→穹窿→乳头体→丘脑前核→扣带皮层→海马 (情绪记忆)", "θ 节律: 内侧隔核→海马 (4-12Hz, 学习必需)"],
        connectivityDiagram: "hippocampus"
      },
      neurotransmitters: ["谷氨酸 (兴奋性传递, 三突触环路)", "GABA (前馈和反馈抑制)", "乙酰胆碱 (隔核→海马, θ 节律, 记忆编码)", "多巴胺 (VTA→海马, 新异性和奖赏信号)", "去甲肾上腺素 (LC→海马, 情绪记忆巩固)", "5-羟色胺 (5-HT1A/4, 调节突触可塑性)"],
      clinicalRelevance: {
        disorders: ["阿尔茨海默病 (最早受损区, 内嗅皮层→CA1 萎缩)", "抑郁症 (海马萎缩 ~10-15%, 应激→糖皮质激素→DG 神经发生减少)", "PTSD (海马体积减小但功能复杂——可能创伤前体积小是风险因素)", "颞叶癫痫 (CA3→齿状回 mossy fiber sprouting)", "精神分裂症 (海马 GABA 能中间神经元功能障碍)"],
        symptoms: "海马损伤 → 顺行性遗忘 (不能形成新记忆, H.M. 经典案例)、空间导航困难、模式分离缺陷",
        treatments: ["抗抑郁药/锂剂 (促进 DG 神经发生)", "运动 (增加 BDNF→促进神经发生+突触可塑性)", "认知训练 (空间记忆任务)", "DBS (穹窿, 阿尔茨海默病, 初步证据)"],
        keyNote: "患者 H.M. (双侧海马切除, 1953) 是认知神经科学中最重要的单一病例——他不能形成新的情景记忆但保留了技能学习 (procedural memory)，证明了记忆的多系统理论"
      },
      research: {
        classicPapers: [
          { author: "Scoville WB & Milner B (1957)", title: "Loss of recent memory after bilateral hippocampal lesions", journal: "Journal of Neurology, Neurosurgery & Psychiatry", doi: "10.1136/jnnp.20.1.11" },
          { author: "O'Keefe J & Dostrovsky J (1971)", title: "The hippocampus as a spatial map. Preliminary evidence from unit activity in the freely-moving rat", journal: "Brain Research", doi: "10.1016/0006-8993(71)90358-1" }
        ],
        recentFindings: "星形胶质细胞在 CA3-CA1 突触处主动参与记忆巩固，通过释放 D-丝氨酸调制 NMDA 受体 (Nature 2024); 海马 sharp-wave ripple 期间的神经元序列重放不仅回放过去的经验，还预演未来的可能路径 (Science 2023)",
        debates: "海马体是'认知地图' (空间理论, O'Keefe & Nadel) 还是'关系记忆处理器' (关系理论, Eichenbaum)？两种观点日益融合——空间可能只是关系记忆的一个特例"
      }
    }
  },

  // ==================== 纹状体/奖赏系统 (橙色) ====================
  {
    id: "nac",
    name: "伏隔核",
    nameEn: "Nucleus Accumbens (NAc)",
    system: "striatal",
    systemName: "纹状体/奖赏系统",
    color: "#E8913A",
    position3D: [16, 10, -6],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "腹侧纹状体，位于前联合下方，尾状核和壳核的腹侧融合处",
        appearance: "卵圆形核团，与其他纹状体结构融合",
        relations: "上方: 尾状核头部 | 外侧: 壳核 | 内侧: 隔核 | 下方: 前穿质",
        size: "约 1.5 cm³ 每侧"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "核心 (Core)", desc: "NAc 的背内侧部分。GABA 能中棘神经元 (MSNs, ~95%)。主要投射至腹侧苍白球 (VP) 和 SNc/VTA。" },
          { name: "壳 (Shell)", desc: "NAc 的腹外侧部分。GABA 能 MSNs。投射至 VP、VTA 和外侧下丘脑。对药物奖赏更敏感。" }
        ],
        cellTypes: ["GABA 能中棘神经元 (MSNs, D1R+ ~50% vs D2R+ ~50%)", "胆碱能巨细胞中间神经元 (TANs, ~2%, 停顿信号)", "GABA 能中间神经元 (PV+, SST+)", "谷氨酸能输入来自 PFC、海马、杏仁核"],
        special: "D1-MSNs 和 D2-MSNs 分别构成直接和间接通路，但 NAc 主要参与边缘环路 (limbic loop) 而非运动控制"
      },
      functions: {
        primary: "奖赏处理、动机（'想要'）、快感（'喜欢'）、奖赏预测误差",
        computational: "将动机价值转化为行动; 整合边缘系统输入 (海马、杏仁核、PFC) 并通过基底节环路影响行为输出",
        paradigms: ["金钱奖赏延迟任务 (MID)", "条件性位置偏好 (CPP)", "颅内自刺激 (ICSS)", "激励突显 (Pavlovian-to-instrumental transfer)", "社会奖赏"],
        dissociations: "Core → 线索诱发的动机 (cue-triggered wanting) | Shell → 奖赏消费和药物奖赏 | D1-MSNs → 奖赏和强化 | D2-MSNs → 厌恶和抑制",
        networks: ["奖赏网络", "中脑边缘多巴胺通路"]
      },
      connectivity: {
        inputs: ["vmPFC/OFC (价值信号)", "杏仁核 (BLA, 情绪价值)", "海马体 (下托, 情境信息)", "VTA (多巴胺, 奖赏预测误差)", "丘脑 (板内核→谷氨酸)"],
        outputs: ["腹侧苍白球 (VP)", "VTA/SNc (间接调节 DA 神经元)", "外侧下丘脑 (动机行为输出)"],
        keyCircuits: ["VTA → NAc Shell (中脑边缘 DA 通路, 奖赏)", "BLA → NAc Core (动机突显)", "NAc → VP → MD 丘脑 → PFC (边缘 CSTC 环路)"],
        connectivityDiagram: "nac"
      },
      neurotransmitters: ["多巴胺 (VTA→NAc Shell, 奖赏预测误差, D1 vs D2)", "谷氨酸 (PFC/BLA/海马输入)", "GABA (MSNs, 主要输出)", "乙酰胆碱 (TANs, 显著性信号)", "内源性阿片肽 (μ/δ 受体, '喜欢')", "内源性大麻素 (逆行信使, LTD)"],
      clinicalRelevance: {
        disorders: ["成瘾 (所有滥用药物→NAc DA↑, 慢性→D2 受体下调)", "抑郁症 (NAc 奖赏反应降低→快感缺失核心症状)", "精神分裂症 (NAc DA 过度→阳性症状)", "双相障碍 (躁狂→NAc 过度活跃)", "帕金森病 (冲动控制障碍, DA 激动剂副作用)"],
        symptoms: "NAc 功能障碍 → 快感缺失、缺乏动机、奖赏学习困难 (抑郁症); 或 → 强迫性渴求、失控性觅药 (成瘾)",
        treatments: ["DBS (NAc, 难治性抑郁症/OCD)", "TMS (左 dlPFC 靶点间接调节 NAc→VP→丘脑环路)", "纳曲酮 (阿片受体拮抗剂, 酒精成瘾)", "安非他酮 (DA/NA 再摄取抑制剂, 抑郁症)"],
        keyNote: "Berridge & Robinson 的激励突显理论：多巴胺不是产生'快感' (liking) 而是'想要' (wanting)——NAc DA 释放促使刺激成为'被渴望的'，即使快感本身由阿片系统介导"
      },
      research: {
        classicPapers: [
          { author: "Olds J & Milner P (1954)", title: "Positive reinforcement produced by electrical stimulation of septal area and other regions of rat brain", journal: "Journal of Comparative and Physiological Psychology", doi: "10.1037/h0058775" },
          { author: "Schultz W, Dayan P & Montague PR (1997)", title: "A neural substrate of prediction and reward", journal: "Science", doi: "10.1126/science.275.5306.1593" },
          { author: "Berridge KC & Robinson TE (1998)", title: "What is the role of dopamine in reward: hedonic impact, reward learning, or incentive salience?", journal: "Brain Research Reviews", doi: "10.1016/S0165-0173(98)00019-8" }
        ],
        recentFindings: "NAc D1-MSNs 和 D2-MSNs 在自由行为中并非简单对立——二者在不同行为阶段协同激活 (Nature Neuroscience 2024); 星形胶质细胞通过释放 ATP/腺苷调制 NAc 突触可塑性 (Neuron 2023)",
        debates: "多巴胺编码的是'奖赏预测误差' (Schultz), '激励突显' (Berridge), 还是'不确定性和学习信号'？"
      }
    }
  },

  {
    id: "vta",
    name: "腹侧被盖区",
    nameEn: "Ventral Tegmental Area (VTA)",
    system: "striatal",
    systemName: "纹状体/奖赏系统",
    color: "#D48A30",
    position3D: [4, -16, -14],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "中脑腹侧，黑质内侧，红核腹侧",
        appearance: "弥散性核团，边界不清，含多巴胺、GABA 和谷氨酸神经元混合",
        relations: "外侧: 黑质致密部 (SNc) | 内侧: 脚间核 | 腹侧: 乳头体 | 背侧: 红核",
        size: "小鼠中约含 20,000-30,000 个 DA 神经元 (双侧)"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "旁臂色素核 (PBP, 外侧 VTA)", desc: "含大多数 NAc 投射 DA 神经元 (A10 细胞群)" },
          { name: "臂旁色素核 (PN, 腹侧 VTA)", desc: "投射至杏仁核和 vmPFC 的 DA 神经元" },
          { name: "线状核 (IF)", desc: "投射至嗅结节的 DA 神经元" },
          { name: "中央线形核 (CLi)", desc: "含 5-HT 和 DA 神经元混合" }
        ],
        cellTypes: ["DA 神经元 (~55-65%, 表达 TH)", "GABA 能神经元 (~30-35%)", "谷氨酸能神经元 (~2-5%, 表达 VGluT2)", "DA-GABA 共释放神经元", "DA-谷氨酸共释放神经元"],
        special: "VTA DA 神经元并非同质群体——它们在放电模式 (tonic vs phasic)、投射靶区和行为功能上高度异质"
      },
      functions: {
        primary: "奖赏预测误差编码、动机和'想要'、厌恶性学习、社会行为",
        computational: "phasic DA 放电 (爆发) 编码奖赏预测误差 (RPE); tonic DA 放电维持动机水平; 不同亚群 DA 神经元编码奖赏或厌恶信号",
        paradigms: ["经典条件化 (CS-US 关联学习)", "奖赏预测误差任务", "社会互动奖赏", "恐惧学习 (部分 VTA DA 神经元编码厌恶)", "不确定性/新异性反应"],
        dissociations: "外侧 VTA → NAc (奖赏、动机) | 内侧 VTA → vmPFC (认知灵活性) | VTA→杏仁核 (恐惧学习) | VTA GABA 神经元 → 奖赏预期",
        networks: ["中脑边缘通路 (VTA→NAc)", "中脑皮层通路 (VTA→PFC)", "奖赏网络"]
      },
      connectivity: {
        inputs: ["NAc (GABA, 间接抑制)", "外侧缰核 (LHb, 谷氨酸→RMTg→VTA GABA→DA 抑制→失望信号)", "脚桥被盖核 (PPTG, 乙酰胆碱/谷氨酸→DA 爆发)", "PFC (谷氨酸→DA 爆发)", "杏仁核 (BLA→VTA)", "中缝核 (5-HT→VTA)"],
        outputs: ["NAc (中脑边缘通路, DA, D1/D2)", "前额叶 (中脑皮层通路, DA, D1)", "杏仁核 (BLA/CeA, DA)", "海马体 (DA, 新异性信号)", "纹状体 (背侧, DA)", "缰核 (DA→LHb, 负性价值)"],
        keyCircuits: ["LHb → RMTg → VTA (DA 抑制, 失望/惩罚信号)", "PPTG → VTA DA→NAc (爆发放电, 奖赏)", "VTA DA → NAc (RPE, 奖赏学习)", "VTA → vmPFC (DA, 认知灵活性/工作记忆)"],
        connectivityDiagram: "vta"
      },
      neurotransmitters: ["多巴胺 (A10 细胞群, 主要输出)", "GABA (局部抑制+长程投射)", "谷氨酸 (少数神经元+部分 DA 神经元共释放)", "5-HT (CLi 亚群)"],
      clinicalRelevance: {
        disorders: ["成瘾 (所有滥用药物→VTA DA 过度释放, 慢性→DA 系统下调)", "抑郁症 (VTA DA 活性降低→快感缺失/缺乏动机)", "精神分裂症 (中脑边缘 DA 过度→阳性症状)", "ADHD (VTA→PFC DA 信号不足→注意力缺陷)", "帕金森病 (SNc 为主, VTA 也受影响→淡漠)"],
        symptoms: "VTA DA 功能不足 → 快感缺失、缺乏自发性、对奖赏不敏感; 过度 → 冲动性、高危行为、精神症状",
        treatments: ["DBS (NAc/VTA, 抑郁症)", "哌甲酯/安非他明 (增加 DA, ADHD)", "抗精神病药 (阻断 D2, 精神分裂症)", "安非他酮 (DA/NA 再摄取抑制, 抑郁症)", "阿片类药物 (抑制 VTA GABA 间神经元→去抑制 DA 神经元→释放 DA)"],
        keyNote: "Schultz 的多巴胺奖赏预测误差理论是计算精神病学的基石——VTA DA 神经元的 phasic 放电完全符合 Rescorla-Wagner 学习规则的预测误差项"
      },
      research: {
        classicPapers: [
          { author: "Schultz W (1998)", title: "Predictive reward signal of dopamine neurons", journal: "Journal of Neurophysiology", doi: "10.1152/jn.1998.80.1.1" },
          { author: "Ungless MA et al. (2004)", title: "Uniform inhibition of dopamine neurons in the ventral tegmental area by aversive stimuli", journal: "Science", doi: "10.1126/science.1093360" }
        ],
        recentFindings: "VTA DA 神经元亚群通过分子标记 (Aldh1a1+ vs Calb1+) 分离奖赏和厌恶信号 (Science 2024); 单细胞 RNA 测序揭示 VTA 至少含 8 个分子上不同的 DA 神经元亚型",
        debates: "DA 编码的是 RPE, 激励突显, 还是'不确定性'？为什么一些 DA 神经元被厌恶刺激激活？"
      }
    }
  },

  {
    id: "caudate",
    name: "尾状核",
    nameEn: "Caudate Nucleus",
    system: "striatal",
    systemName: "纹状体/奖赏系统",
    color: "#D49040",
    position3D: [14, 16, 10],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "背内侧纹状体，沿侧脑室外侧壁弯曲分布",
        appearance: "C 形灰质核团，随侧脑室弯曲延伸",
        relations: "上方/内侧: 侧脑室前角 | 外侧: 内囊 | 下方: NAc (腹侧融合)",
        size: "背侧纹状体的内侧部分"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "头部 (Head)", desc: "前部，参与认知和情感环路" },
          { name: "体部 (Body)", desc: "中部，参与联想环路" },
          { name: "尾部 (Tail)", desc: "后部，沿侧脑室颞角延伸，参与视觉习惯学习" }
        ],
        cellTypes: ["GABA 能中棘神经元 (MSNs, D1R vs D2R, ~95%)", "胆碱能巨细胞中间神经元 (TANs)", "GABA 能中间神经元 (PV+, SST+, NPY+)"],
        special: "与壳核不同，尾状核主要接收来自联合皮层 (association cortex) 的输入，参与认知而非感觉运动功能"
      },
      functions: {
        primary: "目标导向行为、习惯学习、动作序列、反馈学习",
        computational: "通过 CSTC (皮层-纹状体-丘脑-皮层) 环路整合皮层信息; D1-MSNs (直接通路, Go) vs D2-MSNs (间接通路, NoGo) 的竞争决定行动选择",
        paradigms: ["概率分类学习 (天气预测任务)", "反馈学习", "动作序列学习", "延迟匹配样本任务"],
        dissociations: "尾状核 → 目标导向学习 (action-outcome) | 壳核 → 习惯学习 (stimulus-response) | 前部 → 认知/情感 | 后部 → 感觉运动联合",
        networks: ["额叶-纹状体 CSTC 环路 (认知)", "奖赏学习网络"]
      },
      connectivity: {
        inputs: ["联合前额叶 (dlPFC/vmPFC/OFC)", "前运动皮层", "丘脑 (板内核/中央中核)", "SNc (DA)", "VTA (DA)"],
        outputs: ["苍白球 (GPe/GPi)", "SNr (直接通路)", "丘脑 (MD/VA, 通过 GPi/SNr→丘脑→皮层闭合环路)"],
        keyCircuits: ["dlPFC → 尾状核 → GPi → MD 丘脑 → dlPFC (认知 CSTC 环路)", "OFC → 尾状核 → SNr → 丘脑 → OFC (奖赏学习 CSTC)"],
        connectivityDiagram: "caudate"
      },
      neurotransmitters: ["GABA (MSNs, 纹状体主要输出)", "多巴胺 (SNc→尾状核, D1 促进 Go/D2 抑制 NoGo)", "谷氨酸 (皮层输入)", "乙酰胆碱 (TANs)"],
      clinicalRelevance: {
        disorders: ["OCD (尾状核头部→OFC 环路过度活跃)", "亨廷顿病 (尾状核萎缩→舞蹈症+认知障碍)", "帕金森病 (SNc→尾状核 DA 缺失→认知僵化)", "ADHD (尾状核 DA 信号异常)", "Tourette 综合征 (尾状核功能障碍)"],
        symptoms: "尾状核功能障碍 → 目标导向行为缺陷、反馈学习困难、认知僵化/反复行为",
        treatments: ["DBS (内囊前肢/NAc, OCD)", "SSRI (OCD, 调节尾状核→OFC 环路)", "认知训练"],
        keyNote: "尾状核萎缩是亨廷顿病最显著的早期影像学标志——与运动症状 (舞蹈症) 相比，认知和情感症状 (执行功能下降、抑郁) 更早出现"
      },
      research: {
        classicPapers: [
          { author: "Graybiel AM (2005)", title: "The basal ganglia: Learning new tricks and loving it", journal: "Current Opinion in Neurobiology", doi: "10.1016/j.conb.2005.10.006" }
        ],
        recentFindings: "尾状核尾部的 D1-MSNs 选择性编码'有价值的视觉物体'，支持基于奖赏的视觉注意力 (Nature 2024)",
        debates: "习惯是存储在纹状体的哪一部分——壳核 (经典观点) 还是尾状核+壳核共同？"
      }
    }
  },

  {
    id: "putamen",
    name: "壳核",
    nameEn: "Putamen",
    system: "striatal",
    systemName: "纹状体/奖赏系统",
    color: "#D49650",
    position3D: [24, 8, 2],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "背外侧纹状体，位于外囊和苍白球之间",
        appearance: "较大的卵圆形灰质核团，人脑冠状面上最外侧的纹状体结构",
        relations: "外侧: 外囊/屏状核 | 内侧: 苍白球 | 上方: 尾状核 (部分融合至 NAc)",
        size: "背侧纹状体外侧部分，体积大于尾状核"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "背外侧壳核", desc: "接收感觉运动皮层输入，参与习惯形成" },
          { name: "腹内侧壳核", desc: "与 NAc 融合区域，参与动机行为" }
        ],
        cellTypes: ["GABA 能中棘神经元 (MSNs, D1R vs D2R)", "胆碱能巨细胞中间神经元 (TANs)", "GABA 能中间神经元"],
        special: "壳核主要接收感觉运动皮层输入，位于'运动 CSTC 环路'的输入端"
      },
      functions: {
        primary: "习惯形成、运动学习、刺激-反应 (S-R) 关联",
        computational: "将重复的动作序列编译为自动化的习惯; D2-MSNs 在习惯形成中可塑性 (LTD) 增强",
        paradigms: ["序列反应时任务 (SRTT)", "运动技能学习", "习惯覆盖任务 (devaluation task)"],
        dissociations: "壳核 → 习惯 (S-R, 自动化) | 尾状核 → 目标导向 (A-O, 灵活) | 壳核 → 运动 | 尾状核 → 认知",
        networks: ["感觉运动 CSTC 环路", "运动网络"]
      },
      connectivity: {
        inputs: ["初级运动皮层 (M1)", "前运动皮层", "体感皮层 (S1/S2)", "SNc (DA)"],
        outputs: ["苍白球 (GPe/GPi)", "SNr", "丘脑 (VA/VL, 运动丘脑→返回皮层闭合环路)"],
        keyCircuits: ["M1/S1 → 壳核 → GPi → VL丘脑 → M1 (运动 CSTC)", "壳核 → GPe → STN → GPi (间接通路, NoGo)", "壳核 → GPi/SNr (直接通路, Go)"],
        connectivityDiagram: "putamen"
      },
      neurotransmitters: ["GABA (MSNs)", "多巴胺 (SNc→壳核, D1/D2, 最密集 DA 输入区)", "谷氨酸 (皮层输入)", "乙酰胆碱 (TANs)"],
      clinicalRelevance: {
        disorders: ["帕金森病 (SNc→壳核 DA 缺失最严重→运动迟缓/僵直)", "亨廷顿病 (壳核萎缩→舞蹈症)", "肌张力障碍", "药物诱发的运动障碍 (LID, 长期左旋多巴副作用)"],
        symptoms: "壳核 DA 缺失 → 运动迟缓、肌僵直、序列运动困难; 壳核萎缩 → 多动/舞蹈",
        treatments: ["左旋多巴 (DA 前体, 帕金森病金标准)", "DBS (STN/GPi, 帕金森病)", "多巴胺激动剂"],
        keyNote: "帕金森病的壳核 DA 缺失在后部 (感觉运动区) 最严重，这与疾病的运动症状模式高度一致"
      },
      research: {
        classicPapers: [
          { author: "Yin HH & Knowlton BJ (2006)", title: "The role of the basal ganglia in habit formation", journal: "Nature Reviews Neuroscience", doi: "10.1038/nrn1919" }
        ],
        recentFindings: "壳核 D2-MSNs 在习惯形成过程中突触可塑性 (LTD) 逐渐增强，而 D1-MSNs 保持稳定 (Nature Neuroscience 2024)",
        debates: "习惯和目标导向行为是分别由壳核和尾状核独立支持，还是两系统在所有行动中同时激活、相互竞争？"
      }
    }
  },

  // ==================== 感觉系统 (绿色) ====================
  {
    id: "visual",
    name: "视觉皮层",
    nameEn: "Visual Cortex (V1-V5)",
    system: "sensory",
    systemName: "感觉系统",
    color: "#00A896",
    position3D: [-20, -84, 0],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "枕叶，距状裂上下方",
        appearance: "V1 (BA17) 在横截面上可见 Gennari 线 (裸眼可见的白色条纹——因此称为'纹状皮层')",
        relations: "前方: 顶叶/颞叶 | 后方: 枕极 | 上方: 楔叶 | 下方: 舌回",
        size: "V1 约占人类皮层总面积的 10%, 但仅占视觉皮层总体积的 ~15%"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "V1 (BA 17, 纹状皮层)", desc: "初级视觉皮层。第IV层特厚 (分IVA/IVB/IVCα/IVCβ 四个亚层)。含眼优势柱和朝向功能柱。" },
          { name: "V2 (BA 18, 前纹状皮层)", desc: "第IV层较 V1 薄。处理复杂轮廓和边界归属。" },
          { name: "V3/V3A", desc: "处理运动、深度和形状——V3 对低对比度运动敏感，V3A 对全局运动模式敏感" },
          { name: "V4", desc: "颜色处理的核心脑区 (V4 损伤→全色盲)。也处理曲率和形状。" },
          { name: "V5/MT (中颞区)", desc: "运动处理的核心脑区。MT 损伤→运动盲 (akinetopsia)。" }
        ],
        cellTypes: ["锥体神经元 (V1 第III层→V2/V4/MT)", "颗粒细胞 (第IV层, 接收 LGN 输入)", "简单细胞 (朝向选择)", "复杂细胞 (朝向+运动方向选择)", "双拮抗细胞 (颜色对比)"],
        special: "V1 的突触密度是人类脑中最高的——每 mm³ 含约 250,000 个神经元和 7 亿个突触"
      },
      functions: {
        primary: "视觉信息处理的层级系统——从基本特征 (朝向、空间频率、颜色) 到复杂感知 (物体、面孔、运动)",
        computational: "视网膜拓扑映射 (retinotopy)——V1-V3 保持视网膜的空间邻近关系; 层级处理 (V1→V2→V4→IT: 从局部特征到整体物体)",
        paradigms: ["朝向辨别任务", "运动方向辨别", "面孔/物体识别", "视觉搜索", "双眼竞争"],
        dissociations: "腹侧通路 (V1→V2→V4→IT, 'What' 通路: 物体识别) | 背侧通路 (V1→V2→V3→MT→顶叶, 'Where/How' 通路: 空间位置/运动/动作引导)",
        networks: ["视觉网络 (腹侧流+背侧流)"]
      },
      connectivity: {
        inputs: ["外侧膝状体 (LGN, 视网膜→丘脑→V1 主要视觉通路)", "上丘→丘脑枕→V2/V4 (进化古老的'第二视觉系统', 盲视基础)"],
        outputs: ["V2 (同侧+对侧, 通过胼胝体)", "MT/V5 (背侧流)", "V4 (腹侧流)", "额叶眼区 (FEF, 视觉注意)", "上丘 (眼动控制)"],
        keyCircuits: ["LGN→V1 第IVC层→第III层→V2/V4/MT (前馈)", "V2→V1 (反馈, 注意调制和预测编码)", "V1→FEF→上丘→LGN (注意控制环路)"],
        connectivityDiagram: "visual"
      },
      neurotransmitters: ["谷氨酸 (前馈+反馈连接)", "GABA (局部抑制, 朝向/方向选择性微调)", "乙酰胆碱 (基底前脑→V1, 注意增强)", "多巴胺 (VTA→视觉皮层, 新异性增强)", "去甲肾上腺素 (警觉调制)"],
      clinicalRelevance: {
        disorders: ["皮层盲 (V1 双侧损伤→完全失明但瞳孔反射保留)", "盲视 (blindsight): V1 损伤后仍能'猜测'视觉刺激位置/运动方向 (通过上丘→丘脑枕→V2/V5 通路)", "运动盲 (akinetopsia, V5/MT 损伤→看不见运动, 世界如频闪照片)", "全色盲 (achromatopsia, V4 损伤→世界变黑白)", "视觉失认症 (IT 损伤→能看见但不能识别物体)", "面容失认症 (FFA 损伤→不能识别面孔)", "精神分裂症 (视觉错觉易感性, V1/V2 功能异常)"],
        symptoms: "取决于损伤位置——V1 损伤→同向偏盲; MT 损伤→运动知觉丧失; V4 损伤→颜色知觉丧失",
        treatments: ["视觉康复训练 (利用残余视力)", "经颅磁刺激 (TMS, 调制度质兴奋性)", "感官替代设备 (声音/触觉→视觉信息)"],
        keyNote: "盲视是最引人注目的神经心理学发现之一——说明'看见' (无意识视觉) 和'意识到看见' (有意识视觉) 可以在大脑中分离。这支持了意识的前额叶/顶叶理论"
      },
      research: {
        classicPapers: [
          { author: "Hubel DH & Wiesel TN (1962)", title: "Receptive fields, binocular interaction and functional architecture in the cat's visual cortex", journal: "Journal of Physiology", doi: "10.1113/jphysiol.1962.sp006837" },
          { author: "Ungerleider LG & Mishkin M (1982)", title: "Two cortical visual systems", journal: "Analysis of Visual Behavior (Book)" },
          { author: "Goodale MA & Milner AD (1992)", title: "Separate visual pathways for perception and action", journal: "Trends in Neurosciences", doi: "10.1016/0166-2236(92)90344-8" }
        ],
        recentFindings: "V1 神经元不仅处理视觉输入——在完全黑暗中，V1 神经元也编码'预测的视觉输入' (预测编码) (Nature 2024); 深度学习卷积网络 (CNNs) 的前几层与 V1-V4 层级处理高度相似 (NeurIPS 2023)",
        debates: "视觉意识在哪个层级产生——V1 (初级) 还是高级皮层 (前额叶/顶叶)？盲视支持后者，但经颅磁刺激 V1 能消除意识视觉，支持前者"
      }
    }
  },

  {
    id: "thalamus",
    name: "丘脑",
    nameEn: "Thalamus",
    system: "sensory",
    systemName: "感觉系统",
    color: "#2AB8A6",
    position3D: [10, -16, 8],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "间脑背侧，第三脑室外侧壁，位于中脑上方和皮层下方",
        appearance: "卵圆形，两侧丘脑约占间脑 80% 体积",
        relations: "内侧: 第三脑室 | 外侧: 内囊 | 上方: 侧脑室体部 | 下方: 下丘脑/中脑",
        size: "每侧约 5-6 cm³，含 50+ 个核团"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "外侧膝状体 (LGN)", desc: "视觉中继核，接收视网膜输入→投射至 V1" },
          { name: "内侧膝状体 (MGN)", desc: "听觉中继核，接收下丘→投射至 A1" },
          { name: "腹后外侧核 (VPL)", desc: "躯体感觉中继核 (身体)", },
          { name: "腹后内侧核 (VPM)", desc: "躯体感觉中继核 (面部)",
            note: "VPL+VPM 共组腹后复合体 (VP)" },
          { name: "背内侧核 (MD)", desc: "投射至前额叶，参与认知和记忆" },
          { name: "前核 (AN)", desc: "Papez 环路部分, 接收乳头体→投射至扣带皮层" },
          { name: "丘脑枕 (Pulvinar)", desc: "视觉注意，视觉皮层外视觉通路" },
          { name: "板内核 (IL)", desc: "上行激活系统，意识/觉醒" },
          { name: "丘脑网状核 (TRN)", desc: "薄层 GABA 能神经元包裹丘脑外侧，'注意闸门'——选择性抑制无关信息的中继" }
        ],
        cellTypes: ["丘脑皮层投射神经元 (谷氨酸能, 中继核心功能)", "GABA 能局部中间神经元 (~25% 在灵长类中)", "TRN: GABA 能神经元 (唯一的丘脑 GABA 源)"],
        special: "丘脑不仅是被动中继站——TRN 的注意闸门功能和 MD→PFC 的认知投射使其成为主动的信息过滤和调制中心"
      },
      functions: {
        primary: "感觉中继 (除嗅觉外的所有感觉模态)、注意控制、意识/觉醒、皮层间通信",
        computational: "TRN 作为'注意搜索灯'——选择性抑制无关感觉中继，增强相关输入; MD→PFC 支持工作记忆; 丘脑枕→皮层协调跨皮层区的信息同步",
        paradigms: ["感觉门控 (PPI)", "注意定向 (Posner 线索任务)", "工作记忆 (MD→dlPFC 交互)", "意识检测 (全脑变化 vs 局域意识)"],
        dissociations: "一级中继核 (LGN/MGN/VPL/VPM) → 感觉中继 | 联合核 (MD/丘脑枕) → 认知/注意 | 板内核 → 觉醒/意识 | TRN → 注意闸门",
        networks: ["丘脑-皮层环路", "上行激活系统"]
      },
      connectivity: {
        inputs: ["所有感觉通路 (除嗅觉)", "皮层 (第VI层反馈, 调节丘脑增益)", "TRN (GABA 抑制)", "脑干觉醒系统 (ACh, NA, 5-HT, HA, DA)"],
        outputs: ["皮层 (第IV层为主, 前馈感觉中继)", "纹状体 (丘脑-纹状体投射)"],
        keyCircuits: ["感觉→丘脑中继核→皮层第IV层 (前馈)", "皮层第VI层→丘脑中继核+TRN (反馈+增益控制)", "MD→dlPFC (认知/工作记忆皮层-丘脑环路)", "板内核→广泛皮层 (觉醒)"],
        connectivityDiagram: "thalamus"
      },
      neurotransmitters: ["谷氨酸 (丘脑皮层投射, 主要输出)", "GABA (TRN+局部中间神经元, 唯一抑制源)", "乙酰胆碱 (脑干→丘脑, 觉醒/注意)", "去甲肾上腺素 (LC→丘脑, 警觉)", "多巴胺 (VTA→丘脑, 门控调制)", "组胺 (TMN→丘脑, 觉醒)", "食欲素 (LH→丘脑, 稳定觉醒)"],
      clinicalRelevance: {
        disorders: ["失眠 (过度觉醒, TRN 闸门功能障碍)", "精神分裂症 (感觉门控缺陷→PPI 缺失→感觉过载; MD 功能障碍→认知缺陷)", "意识障碍 (昏迷/植物状态, 板内核+网状结构损伤)", "失神发作 (TRN 振荡异常→3Hz 棘慢波)", "丘脑卒中→Dejerine-Roussy 综合征 (对侧持续灼痛)", "ADHD (TRN 注意闸门缺陷)", "致死性家族失眠症 (MD 丘脑退化→进行性失眠→死亡)"],
        symptoms: "丘脑功能障碍 → 感觉过敏或迟钝、注意缺陷、睡眠-觉醒紊乱、在极端情况下丧失意识",
        treatments: ["DBS (中央中核/板内核, 意识障碍/癫痫)", "抗精神病药 (调节丘脑 DA, 改善感觉门控)", "神经反馈 (训练注意力调制)", "褪黑素 (调节丘脑-视交叉上核节律)"],
        keyNote: "TRN 的 GABA 能神经元功能障碍是精神分裂症感觉门控缺陷 (PPI 减少) 的可能神经基础——患者无法过滤无关信息，导致感觉过载和思维紊乱"
      },
      research: {
        classicPapers: [
          { author: "Crick F (1984)", title: "Function of the thalamic reticular complex: The searchlight hypothesis", journal: "PNAS", doi: "10.1073/pnas.81.14.4586" },
          { author: "Sherman SM & Guillery RW (2002)", title: "The role of the thalamus in the flow of information to the cortex", journal: "Philosophical Transactions of the Royal Society", doi: "10.1098/rstb.2002.1161" }
        ],
        recentFindings: "丘脑不仅是中继站——高阶丘脑核 (MD, 丘脑枕) 可直接驱动皮层功能连接，构成平行于皮层-皮层通路的'跨丘脑'通路 (Nature Neuroscience 2024)",
        debates: "丘脑在意识中的角色是什么？意识'开关' (板内核→全脑唤醒) vs 意识'内容' (MD→PFC 认知环路)？"
      }
    }
  },

  // ==================== 脑干/神经调质系统 (黄色) ====================
  {
    id: "hypothalamus",
    name: "下丘脑",
    nameEn: "Hypothalamus",
    system: "brainstem",
    systemName: "脑干/调节系统",
    color: "#D4A832",
    position3D: [4, -2, -8],
    hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: {
        location: "间脑腹侧，丘脑下方，第三脑室底部和侧壁",
        appearance: "小而复杂的核团集合，重量仅 ~4g 但控制全身稳态",
        relations: "上方: 丘脑 | 下方: 垂体 (通过垂体柄连接) | 前方: 视交叉 | 后方: 乳头体/中脑",
        size: "仅约 1 cm³ 每侧，是脑中最小的主要结构之一"
      },
      cytoarchitecture: {
        subnuclei: [
          { name: "室旁核 (PVN)", desc: "合成 CRH (应激轴)、催产素和加压素。HPA 轴核心。" },
          { name: "视上核 (SON)", desc: "合成加压素和催产素→垂体后叶释放。调节水平衡。" },
          { name: "视交叉上核 (SCN)", desc: "生物钟 (昼夜节律) 的主起搏器。接收视网膜输入。" },
          { name: "弓状核 (ARC)", desc: "食欲调节中心。含 NPY/AgRP 神经元 (促食) 和 POMC 神经元 (抑食)。" },
          { name: "腹内侧核 (VMN)", desc: "饱足中心。损伤→贪食和肥胖。" },
          { name: "外侧下丘脑 (LH)", desc: "摄食中枢。含 MCH 和食欲素神经元。损伤→厌食。" },
          { name: "背内侧核 (DMN)", desc: "调节摄食和能量平衡" },
          { name: "乳头体", desc: "Papez 环路的一部分, 接收海马体→投射至丘脑前核。与记忆相关。" },
          { name: "视前区 (POA)", desc: "体温调节、睡眠-觉醒、性行为" }
        ],
        cellTypes: ["神经内分泌神经元 (PVN/SON→释放激素入垂体门脉系统)", "自主神经投射神经元 (→脑干/脊髓自主核)", "肽能神经元 (NPY, AgRP, POMC, MCH, 食欲素等)"],
        special: "下丘脑是神经和内分泌系统的关键接口——通过垂体门脉系统控制整个内分泌系统的激素释放"
      },
      functions: {
        primary: "稳态调控 (体温、水平衡、摄食、能量代谢)、应激反应 (HPA 轴)、昼夜节律、生殖行为、动机行为",
        computational: "整合内感受信号 (激素、血糖、渗透压、体温) 与外感受信号 (光、应激、社会线索) → 调控自主神经、内分泌和行为输出",
        paradigms: ["应激反应 (CRH→ACTH→皮质醇)", "摄食行为 (NPY/AgRP vs POMC)", "昼夜节律 (SCN→褪黑素节律)", "饮水行为 (渗透压感受器→加压素)"],
        dissociations: "前部下丘脑 → 副交感 (休息/消化) | 后部下丘脑 → 交感 (战斗/逃跑) | LH → 促食 | VMN → 饱足 | PVN → 应激 | SCN → 节律",
        networks: ["HPA 轴", "自主神经系统中枢", "神经内分泌系统"]
      },
      connectivity: {
        inputs: ["杏仁核 (情绪→自主反应)", "海马体 (情境信息, 通过穹窿→乳头体)", "PFC (情绪调节→自主控制)", "脑岛 (内感受→稳态调控)", "视网膜 (光→SCN)", "脑干 (内脏感觉)", "血液 (激素/渗透压/血糖——绕过血脑屏障的室周器官, CVOs)"],
        outputs: ["垂体后叶 (催产素/加压素释放)", "垂体前叶 (释放激素→调节促激素)", "脑干自主神经核 (交感+副交感)", "脊髓侧角 (交感节前神经元)", "VTA (动机/奖赏行为)", "丘脑前核 (通过乳头体)"],
        keyCircuits: ["PVN→CRH→垂体前叶→ACTH→肾上腺→皮质醇 (HPA 轴)", "SCN→PVN→松果体→褪黑素 (昼夜节律)", "ARC NPY/AgRP→LH (促食) | ARC POMC→VMN (抑食)", "LH 食欲素→全脑 (稳定觉醒)"],
        connectivityDiagram: "hypothalamus"
      },
      neurotransmitters: ["谷氨酸", "GABA", "神经肽 Y (NPY, 最强促食欲信号)", "AgRP (促食)", "α-MSH (POMC 产物, 抑食)", "MCH (促食+睡眠)", "食欲素/Orexin (稳定觉醒+促食)", "CRH (应激轴)", "TRH (甲状腺轴)", "GnRH (生殖轴)", "GHRH (生长轴)", "催产素 (社会联结+分娩+泌乳)", "加压素/ADH (水平衡+社会行为)", "多巴胺 (LH→NAc, 奖赏)", "组胺 (TMN→全脑, 觉醒)"],
      clinicalRelevance: {
        disorders: ["抑郁症 (HPA 轴过度活跃→CRH↑→皮质醇↑→海马萎缩→恶性循环)", "PTSD (HPA 轴失调——基础皮质醇低但 CRH 高)", "进食障碍 (NPY/AgRP vs POMC 失衡)", "失眠/节律障碍 (SCN 功能障碍→褪黑素节律紊乱)", "尿崩症 (加压素缺乏→多尿多饮)", "压力性闭经 (GnRH 抑制→月经停止)", "发作性睡病 (食欲素神经元丧失→日间不可控睡眠)"],
        symptoms: "下丘脑功能障碍 → 取决于受损核团——饮食紊乱、体温失调、睡眠-觉醒紊乱、内分泌异常、水平衡问题",
        treatments: ["CRH 受体拮抗剂 (抑郁症, 实验阶段)", "食欲素受体拮抗剂 (失眠, suvorexant)", "褪黑素 (昼夜节律调节)", "催产素鼻腔喷雾 (社会行为, 研究阶段)"],
        keyNote: "HPA 轴过度活跃是抑郁症最一致的生物学发现之一——约 50% 的抑郁症患者显示地塞米松抑制试验 (DST) 非抑制 (皮质醇不受抑制), 且 CRH 在 CSF 中升高"
      },
      research: {
        classicPapers: [
          { author: "Selye H (1936)", title: "A syndrome produced by diverse nocuous agents", journal: "Nature", doi: "10.1038/138032a0" },
          { author: "Swaab DF et al. (2005)", title: "The stress system in the human brain in depression and neurodegeneration", journal: "Ageing Research Reviews", doi: "10.1016/j.arr.2005.03.003" }
        ],
        recentFindings: "AgRP 神经元不仅调节摄食——它们的激活也减少痛觉和促进社交退缩 (Nature 2024); 外侧下丘脑 GABA 神经元驱动强迫性觅食 (Cell 2023)",
        debates: "CRH 过度活跃是抑郁症的'原因'还是'结果'？早期生活应激→CRH 系统编程→终生 HPA 轴过度反应"
      }
    }
  },

  // ==================== 简洁条目（其余核心脑区） ====================

  {
    id: "sn",
    name: "黑质", nameEn: "Substantia Nigra (SNc/SNr)",
    system: "brainstem", systemName: "脑干/调节系统", color: "#C49828",
    position3D: [8, -18, -16], hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: { location: "中脑腹侧，VTA 外侧，大脑脚背侧。SNc 含黑色素呈黑色; SNr 呈浅色。", appearance: "SNc 因神经黑色素呈深色（灵长类特有）", relations: "外侧: 大脑脚 | 内侧: VTA | 背侧: 红核", size: "人类每侧约含 400,000-600,000 个 DA 神经元" },
      cytoarchitecture: { subnuclei: [
        { name: "SNc (致密部)", desc: "A9 多巴胺细胞群。投射至背侧纹状体（黑质纹状体通路）。DA 神经元含神经黑色素 (neuromelanin)。" },
        { name: "SNr (网状部)", desc: "GABA 能神经元。基底节的输出核之一（与 GPi 功能类似）。" }
      ], cellTypes: ["SNc: DA 神经元 (~90%) + GABA 间神经元", "SNr: GABA 能投射神经元"], special: "SNc DA 神经元是脑内死亡最慢但最先在帕金森病中选择性退化的神经元" },
      functions: { primary: "SNc: 运动启动和 vigour（活力）; 习惯学习。SNr: 基底节主要输出核（抑制丘脑和上丘）。", computational: "SNc DA → 纹状体背侧: 编码行动价值和运动 vigour; SNr → 丘脑/上丘: 通过紧张性抑制实现行动选择（去抑制=Go）", paradigms: ["运动序列学习", "habitual responding", "reward-guided action selection"], dissociations: "SNc → 运动/习惯 (黑质纹状体通路) | VTA → 奖赏/动机 (中脑边缘通路) | SNr → 基底节输出 (Go/NoGo)", networks: ["黑质纹状体 DA 通路", "基底节输出环路"] },
      connectivity: { inputs: ["纹状体 (GABA, 直接通路→SNr; 间接通路通过 GPe→STN→SNr)", "STN (谷氨酸→SNr)", "VTA (DA→SNc)", "杏仁核 (CeA→SNc)"], outputs: ["纹状体 (SNc→DA→壳核/尾状核, 黑质纹状体通路)", "丘脑 (SNr→VA/VL, 运动输出)", "上丘 (SNr→上丘, 眼动控制)", "脚桥核 (SNr→PPN, 姿势控制)"], keyCircuits: ["SNc DA→背侧纹状体 (运动学习+vigour)", "SNr→丘脑 VA/VL (基底节输出→抑制→去抑制机制)", "SNr→上丘 (扫视控制)"], connectivityDiagram: "sn" },
      neurotransmitters: ["多巴胺 (SNc→纹状体, 运动 vigour 和学习)", "GABA (SNr→丘脑/上丘, 紧张性抑制)", "谷氨酸 (STN→SNr)"],
      clinicalRelevance: { disorders: ["帕金森病 (SNc DA 神经元死亡→运动迟缓/僵直/震颤; 死亡>70% 时出现症状)", "多系统萎缩 (MSA)", "进行性核上性麻痹 (PSP)", "精神分裂症 (SNc DA 功能异常)", "成瘾 (SNc 习惯学习增强)"], symptoms: "SNc DA 缺失 → 运动迟缓、肌僵直、静息性震颤、姿势不稳、动作 vigor 降低", treatments: ["左旋多巴 (L-DOPA, 补充 DA)", "DBS (STN/GPi, 基底节输出核调控)", "DA 激动剂 (普拉克索)", "MAO-B 抑制剂 (司来吉兰)", "胎儿 DA 细胞移植 (实验阶段)"], keyNote: "帕金森病的 SNc DA 神经元死亡有特异性模式——腹外侧 SNc (投射至壳核) 最先退化，与运动症状出现一致" },
      research: { classicPapers: [{ author: "Hornykiewicz O (1966)", title: "Dopamine and brain function", journal: "Pharmacological Reviews" }], recentFindings: "SNc DA 神经元死亡可能始于轴突末梢 (纹状体) 而非胞体——'dying back'假说 (Science 2024)", debates: "α-synuclein 聚集是 DA 神经元死亡的'原因'还是'结果'？" }
    }
  },

  {
    id: "raphe",
    name: "中缝核", nameEn: "Raphe Nuclei",
    system: "brainstem", systemName: "脑干/调节系统", color: "#C4A040",
    position3D: [2, -22, -28], hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: { location: "脑干中线 (raphe = '缝')，从中脑到延髓分布", appearance: "沿中线分布的细长柱形核团群", relations: "腹侧: 皮质脊髓束 | 背侧: 导水管周围灰质 (PAG) ← 部分中缝核在 PAG 内", size: "含约 10-15 个核团" },
      cytoarchitecture: { subnuclei: [
        { name: "背侧中缝核 (DRN)", desc: "中脑/脑桥。最大 5-HT 核团 (~50% 前脑 5-HT)。投射至前脑几乎所有区域。" },
        { name: "内侧中缝核 (MRN)", desc: "脑桥。投射至海马体和隔核 (不同于 DRN 的主要靶区)。" },
        { name: "中缝大核 (NRM)", desc: "延髓。投射至脊髓后角，参与下行疼痛抑制。" }
      ], cellTypes: ["5-HT 能神经元 (DRN 为主)", "GABA 能神经元", "谷氨酸能神经元 (部分 5-HT 神经元共释放谷氨酸)", "DA 能神经元 (少数)"], special: "DRN 5-HT 神经元有不同的电生理类型——tonic (稳定) vs burst (爆发) ——可能编码不同的行为状态" },
      functions: { primary: "情绪调节、焦虑、抑郁、冲动控制、睡眠-觉醒、疼痛调制", computational: "5-HT 信号编码'等待奖赏的耐心'和'惩罚敏感性'——5-HT 促进行为抑制和延迟满足", paradigms: ["5-HT 耗竭→冲动性增高 (5-CSRTT)", "抗抑郁药→5-HT↑→情绪改善", "社交失败应激→DRN 5-HT 活性变化", "疼痛抑制 (NRM→脊髓)", "等待奖赏任务"], dissociations: "DRN → 前脑 5-HT (情绪/认知) | MRN → 海马体 5-HT (焦虑/应激弹性) | NRM → 脊髓 5-HT (下行疼痛抑制)", networks: ["弥散性调节系统 (5-HT 系统)"] },
      connectivity: { inputs: ["PFC (vmPFC 调节 DRN)", "外侧缰核 (LHb→DRN, 惩罚/失望信号)", "杏仁核 (CeA→DRN)", "PAG (疼痛→NRM)", "下丘脑 (LH 食欲素→DRN, 觉醒)"], outputs: ["前脑广泛区域 (DRN→皮层/纹状体/杏仁核/海马体)", "海马体 (MRN→, 5-HT1A 受体)", "脊髓后角 (NRM→, 下行疼痛抑制)"], keyCircuits: ["DRN→前额叶 (5-HT, 情绪调节+冲动控制)", "DRN→杏仁核 (5-HT, 焦虑调制)", "MRN→海马体 (5-HT, 应激弹性——MRN 激活促进应激恢复)", "PAG→NRM→脊髓 (内源性镇痛系统)"], connectivityDiagram: "raphe" },
      neurotransmitters: ["5-羟色胺 (5-HT, 主要输出, 至少 14 种受体亚型)", "谷氨酸 (部分 5-HT 神经元共释放)", "GABA (局部+投射)", "多巴胺 (少数 DRN 神经元)", "一氧化氮 (NO, 逆行信使)"],
      clinicalRelevance: { disorders: ["抑郁症 (5-HT 功能不足——SSRI 疗效基于此)", "焦虑障碍 (DRN 5-HT 对杏仁核/BNST 抑制不足)", "冲动控制障碍和自杀 (CSF 中 5-HIAA 低——5-HT 周转↓)", "偏头痛 (5-HT 1B/1D 受体是曲普坦类药物靶点)", "慢性疼痛 (下行疼痛抑制系统功能障碍)", "睡眠障碍 (DRN 5-HT 促进觉醒和抑制 REM 睡眠)"], symptoms: "5-HT 功能不足 → 情绪低落、焦虑、冲动性、睡眠紊乱、疼痛敏感性增高", treatments: ["SSRI/SNRI (阻断 5-HT 转运体→细胞外 5-HT↑, 一线抗抑郁/抗焦虑药)", "5-HT1A 激动剂 (丁螺环酮, 抗焦虑)", "5-HT2A 拮抗剂 (非典型抗精神病药, 如奥氮平)", "曲普坦类药物 (5-HT 1B/1D 激动剂, 偏头痛)", "赛洛西宾/裸盖菇素 (5-HT2A 激动剂, 抑郁症/焦虑, 实验阶段)"], keyNote: "5-HT 学说 (抑郁症=5-HT 不足) 过于简化——SSRI 虽然立即增加 5-HT，但临床效果需 2-4 周（涉及受体下调和神经发生），约 30% 患者对 SSRI 无反应" },
      research: { classicPapers: [{ author: "Asberg M et al. (1976)", title: "5-HIAA in the cerebrospinal fluid: A biochemical suicide predictor?", journal: "Archives of General Psychiatry" }], recentFindings: "DRN 5-HT 神经元通过不同的传出投射编码不同行为——投射至杏仁核的 5-HT 神经元促进焦虑，投射至 NAc 的 5-HT 神经元促进社交奖赏 (Cell 2024)", debates: "5-HT 是'抗焦虑'还是'促焦虑'？取决于受体亚型 (5-HT1A → 抗焦虑 | 5-HT2C → 促焦虑) 和靶区 (杏仁核 vs BNST)" }
    }
  },

  {
    id: "lc",
    name: "蓝斑", nameEn: "Locus Coeruleus (LC)",
    system: "brainstem", systemName: "脑干/调节系统", color: "#C8A848",
    position3D: [4, -28, -22], hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: { location: "脑桥背侧，第四脑室底部外侧，紧邻中脑导水管上端", appearance: "肉眼可见的蓝色小点——因含神经黑色素 (neuromelanin) 而呈蓝色", relations: "内侧: 第四脑室 | 外侧: 三叉神经中脑核 | 腹侧: 臂旁核", size: "人类每侧仅约 15,000-30,000 个 NA 神经元，但投射至几乎全脑" },
      cytoarchitecture: { subnuclei: [{ name: "LC 核心", desc: "A6 去甲肾上腺素细胞群——脑内几乎全部 NA 的来源 (~50% 来自 LC)" }], cellTypes: ["NA 能神经元 (含神经黑色素)", "GABA 能中间神经元 (少数)"], special: "LC 虽然极小，但其单个 NA 神经元可以投射至皮层、海马体、丘脑、小脑等多个区域——一个 LC 神经元可通过分支轴突同时支配不同脑区" },
      functions: { primary: "警觉/唤醒、应激反应、注意力、情绪记忆巩固、认知灵活性", computational: "LC 有两种放电模式: tonic (紧张性, 维持一般唤醒水平) 和 phasic (相位性, 对显著刺激的快速反应)。Yerkes-Dodson 曲线的神经基础——中等 LC 活性 (phasic mode) 促进最佳任务表现; 过高活性 (tonic→应激/焦虑) 降低表现", paradigms: ["Oddball 任务 (phasic LC→P300 ERP)", "应激记忆增强", "注意力切换任务", "瞳孔测量 (pupillometry——瞳孔直径是 LC 活性的非侵入性指标)"], dissociations: "Phasic LC → 任务参与/最佳表现 | Tonic LC → 焦虑/高唤醒/分心", networks: ["弥散性调节系统 (NA 系统)", "上行激活系统"] },
      connectivity: { inputs: ["前额叶 (vmPFC→LC, 情绪调节)", "杏仁核 (CeA→LC, 应激→NA 释放→增强 BLA 功能)", "PAG", "下丘脑 (LH 食欲素→LC, 觉醒)", "旁巨细胞核 (PGi, 自主神经输入)"], outputs: ["全脑广泛投射 (皮层/海马体/丘脑/杏仁核/下丘脑/小脑/脑干/脊髓)", "特别密集: 前额叶和海马体"], keyCircuits: ["LC→BLA (NA, 情绪记忆巩固——NA 阻断剂 (普萘洛尔) 破坏恐惧记忆再巩固)", "LC→前额叶 (NA, 工作记忆信噪比增强, α2A 受体)", "杏仁核 CeA→LC (应激→NA 释放→正反馈应激回路)"], connectivityDiagram: "lc" },
      neurotransmitters: ["去甲肾上腺素 (NA, 主要输出, α1/α2/β 受体)", "神经肽 Y (NPY, 共释放, 抗焦虑)", "甘丙肽 (Galanin, 共释放, 抑制 LC 过度兴奋——内源性'刹车')"],
      clinicalRelevance: { disorders: ["PTSD (LC 过度活跃→过度警觉/惊吓反应增强; NA→BLA→恐惧记忆过度巩固)", "惊恐障碍 (LC→自主神经输出→惊恐发作)", "抑郁症 (LC NA 不足→疲乏/注意力不集中; α2 受体功能异常)", "ADHD (LC→PFC NA 信号不足——哌甲酯部分通过增加 NA 起作用)", "阿尔茨海默病 (LC NA 神经元早期退化→认知下降)", "焦虑障碍 (LC tonic 活性增高→持续高唤醒)"], symptoms: "LC 过度活跃 → 过度警觉、睡眠困难、惊吓反应增强、焦虑、恐惧记忆过度巩固; LC 功能不足 → 疲乏、注意力不集中、认知功能下降", treatments: ["SNRI (文拉法辛/度洛西汀, 增加 NA+5-HT)", "α2 激动剂 (可乐定/胍法辛, 减少 NA 释放, ADHD/焦虑/PTSD)", "β 阻断剂 (普萘洛尔, 阻断 NA→BLA 情绪记忆巩固, PTSD)", "哌甲酯 (增加 NA+DA, ADHD)", "育亨宾 (α2 拮抗剂, 增加 NA→诱发惊恐, 惊恐障碍研究工具)"], keyNote: "普萘洛尔 (β 阻断剂) 在创伤记忆重新激活后服用可破坏重新巩固过程 (reconsolidation)——这是 PTSD 预防的潜在干预方式，但临床效果不一致" },
      research: { classicPapers: [{ author: "Aston-Jones G & Cohen JD (2005)", title: "An integrative theory of locus coeruleus-norepinephrine function: Adaptive gain and optimal performance", journal: "Annual Review of Neuroscience" }], recentFindings: "LC NA 神经元在睡眠中也活跃——NREM 睡眠中的 LC 沉默是记忆巩固的必要条件; LC 过度活跃在失眠中破坏这一过程 (Science 2024)", debates: "LC NA 的认知作用是'增加信噪比'还是'网络重置 (network reset)'促进行为切换？" }
    }
  },

  {
    id: "pag",
    name: "导水管周围灰质", nameEn: "Periaqueductal Gray (PAG)",
    system: "brainstem", systemName: "脑干/调节系统", color: "#B89830",
    position3D: [2, -24, -6], hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: { location: "中脑，围绕中脑导水管的灰质柱", appearance: "环绕导水管的环形灰质", relations: "背侧: 上丘/下丘 | 腹侧: VTA/SN/动眼神经核 | 外侧: 臂旁核", size: "从后联合延伸到蓝斑水平的连续灰质柱" },
      cytoarchitecture: { subnuclei: [
        { name: "背外侧 PAG (dlPAG)", desc: "主动应对策略 (active coping)——战斗/逃跑。投射至交感神经输出通路。" },
        { name: "外侧 PAG (lPAG)", desc: "主动应对+疼痛调制。" },
        { name: "腹外侧 PAG (vlPAG)", desc: "被动应对 (passive coping)——冻结/静止。投射至副交感神经输出通路。阿片类镇痛的关键位点。" },
        { name: "背内侧 PAG (dmPAG)", desc: "恐惧/焦虑表达。" }
      ], cellTypes: ["谷氨酸能神经元", "GABA 能神经元", "5-HT 能神经元 (部分中缝核在 PAG 内)", "内源性阿片肽表达神经元"], special: "PAG 功能柱沿前后轴排列——不同柱的相关行为可以同时被激活或抑制，构成'防御行为网络'的皮层下协调中心" },
      functions: { primary: "恐惧/防御行为协调、疼痛调制 (内源性镇痛)、自主神经调节、发声", computational: "根据威胁的迫近程度协调防御策略——远端威胁→dlPAG (逃跑); 近端威胁→vlPAG (冻结); 根据情境在主动和被动应对间切换", paradigms: ["恐惧条件化 (冻结反应输出)", "恐惧消退", "电刺激 PAG→诱发防御行为", "阿片类镇痛", "惊恐发作 (CO₂/乳酸钠→刺激 PAG→诱发惊恐)"], dissociations: "dlPAG → 主动应对 (战斗/逃跑/心动过速/高血压) | vlPAG → 被动应对 (冻结/静止/心动过缓/低血压/内源性镇痛)", networks: ["防御行为网络", "下行疼痛调制系统"] },
      connectivity: { inputs: ["杏仁核 (CeA→vlPAG→冻结)", "前额叶 (vmPFC 间接抑制 PAG→恐惧消退)", "下丘脑 (自主神经下行通路)", "脊髓 (疼痛上行通路→PAG)"], outputs: ["延髓腹内侧核 (RVM, 下行疼痛抑制)", "蓝斑 (NA)", "中缝大核 (5-HT, 下行疼痛抑制)", "脊髓侧角 (交感节前神经元)", "臂旁核", "腹侧呼吸组 (呼吸输出)"], keyCircuits: ["CeA→vlPAG→延髓腹侧 (冻结行为输出)", "PAG→RVM/中缝大核→脊髓后角 (下行疼痛抑制——'闸门控制理论'中枢)", "dlPAG→交感输出 (战斗/逃跑自主神经反应)"], connectivityDiagram: "pag" },
      neurotransmitters: ["谷氨酸 (主输出)", "GABA (vlPAG 局部抑制→调节冻结)", "内源性阿片肽 (β-内啡肽, 脑啡肽→μ/δ受体→下行镇痛)", "5-HT (下行镇痛通路)", "NA (下行镇痛通路)", "P 物质", "胆囊收缩素 (CCK, 抗阿片肽——CCK↑→吗啡镇痛效果↓)"],
      clinicalRelevance: { disorders: ["惊恐障碍 (PAG 对 CO₂/乳酸钠超敏→自发惊恐发作)", "PTSD (PAG 防御反应阈值降低→过度冻结或过度惊恐)", "慢性疼痛 (下行疼痛抑制系统功能障碍→PAG→RVM 镇痛不足)", "焦虑障碍 (防御行为网络过度活跃)", "偏头痛 (PAG 功能障碍→三叉神经血管系统去抑制?)"], symptoms: "PAG 过度活跃 → 自发惊恐发作 (强烈恐惧+心动过速+呼吸困难+濒死感)、防御行为阈值降低", treatments: ["阿片类药物 (μ 受体激动剂→PAG→下行镇痛, 慢性疼痛)", "SSRI (通过 5-HT 增强 PAG→RVM 下行镇痛+抗惊恐)", "DBS (vlPAG, 慢性疼痛)", "CBT (认知重建→vmPFC→PAG 抑制增强)", "μ 受体拮抗剂 (纳洛酮阻断 PAG 镇痛, 研究工具)"], keyNote: "惊恐发作可以仅由脑干 (PAG+LC+自主神经核) 产生，不需要皮层参与——这解释了为什么惊恐发作患者常报告'不知道为什么感到恐惧' (无意识恐惧, LeDoux)" },
      research: { classicPapers: [{ author: "Bandler R & Shipley MT (1994)", title: "Columnar organization in the midbrain periaqueductal gray: modules for emotional expression?", journal: "Trends in Neurosciences" }], recentFindings: "vlPAG 谷氨酸能神经元的化学遗传学激活足以完全抑制疼痛——疼痛感知和情绪反应 (Nature 2024)", debates: "惊恐发作 (panic attack) 起源于 PAG (脑干理论, Klein) 还是杏仁核 (边缘系统理论) 还是对异常内感受信号的灾难化解释 (认知理论, Clark)？" }
    }
  },

  // ==================== 白质/连接 (灰色) ====================
  {
    id: "corpus-callosum",
    name: "胼胝体", nameEn: "Corpus Callosum",
    system: "white-matter", systemName: "白质/连接", color: "#8E8E9A",
    position3D: [0, 24, 18], hemisphere: "midline",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: { location: "大脑纵裂底部，连接左右半球的最大白质纤维束", appearance: "弓形白色宽带 (约 10cm 长), 矢状切面可见其弯曲轮廓", relations: "上方: 扣带回 | 下方: 侧脑室/透明隔/穹窿", size: "含约 2-2.5 亿条轴突，是脑内最大白质束" },
      cytoarchitecture: { subnuclei: [
        { name: "膝部 (Genu)", desc: "前部弯曲。连接两侧前额叶。在发育中最后髓鞘化 (~25岁)。" },
        { name: "体部 (Body)", desc: "中部。连接两侧运动/感觉/顶叶皮层。" },
        { name: "压部 (Splenium)", desc: "后部膨大。连接两侧枕叶和颞叶后部。" },
        { name: "嘴部 (Rostrum)", desc: "最前部。连接两侧 OFC。" }
      ], cellTypes: ["有髓鞘轴突 (来自皮层第II/III/IV层锥体神经元)", "少突胶质细胞 (形成髓鞘)", "无神经元胞体——纯白质"], special: "胼胝体约 80% 的纤维是兴奋性 (谷氨酸能)，约 20% 是抑制性 (通过 GABA 能中间神经元在目标区间接实现半球间抑制)" },
      functions: { primary: "半球间通信和信息整合。确保左右半球协调运作。", computational: "将一侧半球的皮层表征传输至对侧同源区——支持双侧整合的感觉/运动/认知功能。也传输抑制信号以维持半球间平衡 (hemispheric rivalry)", paradigms: ["裂脑人研究 (Sperry & Gazzaniga)", "分离视野任务 (divided visual field)", "经胼胝体抑制 (TCI, TMS 测量)", "DTI 纤维追踪"], dissociations: "膝部 → 前额叶间通信 (工作记忆、决策) | 体部 → 运动/感觉间通信 | 压部 → 视觉间通信", networks: ["半球间连接"] },
      connectivity: { inputs: ["所有皮层区域 (第II/III层锥体神经元→胼胝体)"], outputs: ["对侧同源皮层区域 (经胼胝体轴突→第IV层/第V层锥体神经元)"], keyCircuits: ["左 dlPFC ↔ 右 dlPFC (经膝部, 工作记忆协同)", "左视觉皮层 ↔ 右视觉皮层 (经压部, 视觉整合)", "左 M1 ↔ 右 M1 (经体部, 双手协调)"], connectivityDiagram: "cc" },
      neurotransmitters: ["谷氨酸 (绝大多数经胼胝体投射是兴奋性)"],
      clinicalRelevance: { disorders: ["裂脑综合征 (callosal syndrome, 胼胝体切断→半球独立运作: 左脑能命名但右脑不能——但右脑能画出物体)", "胼胝体发育不全 (AgCC)——社会认知困难 (缺乏半球间情绪信息整合?)", "多发性硬化 (胼胝体是常见脱髓鞘部位)", "癫痫 (callosotomy 治疗顽固性癫痫——切断半球间癫痫传播)", "ADHD (胼胝体体积减小, 特别是压部)", "精神分裂症 (胼胝体微结构异常→半球间失连接假说)", "自闭症 (胼胝体体积减小→长程连接不足理论)", "创伤性脑损伤 (DTI 常发现胼胝体微结构损伤)"], symptoms: "胼胝体损伤 → 半球间信息传输减慢或中断: 左手失用 (左脑指令不能到达右脑控制左手), 异己手综合征 (alien hand syndrome——一只手'自己做决定'), 双侧感觉整合缺陷", treatments: ["无直接治疗——治疗原发病 (如 MS 免疫调节)", "认知康复训练 (利用残余半球间通路)"], keyNote: "Sperry & Gazzaniga 的裂脑人研究获得 1981 年诺贝尔奖——揭示了左右半球功能特化 (侧化) 和意识是否可以'分裂'的深远哲学问题" },
      research: { classicPapers: [{ author: "Sperry RW (1968)", title: "Hemisphere deconnection and unity in conscious awareness", journal: "American Psychologist" }, { author: "Gazzaniga MS (2000)", title: "Cerebral specialization and interhemispheric communication", journal: "Brain" }], recentFindings: "胼胝体不仅是'被动电缆'——它主动过滤和转换半球间传输的信息，选择性增强特定频率的振荡同步 (Nature Neuroscience 2024)", debates: "裂脑人是否具有'两个分离的意识'——Gazzaniga 的'左脑解释器 (interpreter module)'假说?" }
    }
  },

  // ==================== 额外核心脑区 (精简) ====================
  {
    id: "m1",
    name: "初级运动皮层", nameEn: "Primary Motor Cortex (M1, BA 4)",
    system: "motor", systemName: "运动系统", color: "#4A9EAA",
    position3D: [18, -16, 50], hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: { location: "中央前回，中央沟前方，BA 4", appearance: "无颗粒型皮层——第IV层 (颗粒层) 几乎缺失，但第V层含有巨大的 Betz 细胞", relations: "前方: 前运动皮层 (BA 6) | 后方: 中央沟/初级体感皮层 (S1)", size: "躯体拓扑映射 (homunculus) ——身体各部位按比例映射至 M1" },
      cytoarchitecture: { subnuclei: [], cellTypes: ["Betz 细胞 (第V层, 最大的 CNS 神经元, 轴突直径达 10μm→脊髓直接投射)", "锥体神经元 (第III/V/VI层)", "中间神经元"], special: "Betz 细胞是 CNS 中最大的神经元——单个 Betz 细胞可通过皮质脊髓束直接兴奋脊髓 α 运动神经元" },
      functions: { primary: "随意运动执行——编码运动方向、力度和速度", computational: "群体编码 (population coding) ——运动方向由神经元群体的加权平均活动决定 (Georgopoulos)", paradigms: ["运动想象 (motor imagery→M1 激活)", "运动学习 (序列运动→M1 重组)", "经颅磁刺激 (TMS→M1→MEP 测量皮层兴奋性)"], dissociations: "M1 → 运动执行 | 前运动皮层 → 运动准备/计划 | 辅助运动区 → 序列运动/内部引导运动", networks: ["感觉运动网络"] },
      connectivity: { inputs: ["前运动皮层", "S1 (体感反馈)", "丘脑 (VL, 小脑→丘脑→M1)", "基底节 (GPi→丘脑→M1)"], outputs: ["皮质脊髓束 (CST, 锥体束→脊髓运动神经元/中间神经元)", "纹状体 (壳核)", "丘脑 (VL)"], keyCircuits: ["M1→皮质脊髓束→脊髓→肌肉 (最终共同通路)", "小脑→VL 丘脑→M1 (运动协调+误差修正)", "基底节→GPi→VL 丘脑→M1 (运动选择+vigour)"], connectivityDiagram: "m1" },
      neurotransmitters: ["谷氨酸 (Betz 细胞+锥体神经元, 主要输出→脊髓/纹状体)", "GABA (局部抑制→运动精细调控)", "多巴胺 (SNc→M1, 运动 vigour)", "去甲肾上腺素 (LC→M1, 警觉→运动表现增强)"],
      clinicalRelevance: { disorders: ["卒中 (M1 损伤→对侧瘫痪或无力; 但 CST 在延髓交叉——所以 M1 损伤→对侧症状)", "肌萎缩侧索硬化症 (ALS, Betz 细胞+脊髓α运动神经元退化)", "原发性侧索硬化 (PLS, 仅上运动神经元退化)", "帕金森病 (基底节→丘脑→M1 环路功能障碍→运动迟缓)", "亨廷顿病 (M1 功能障碍→舞蹈症)"], symptoms: "M1 损伤 → 对侧瘫痪/无力 (取决于损伤位置——homunculus 的特定区域受损→特定身体部位瘫痪), 痉挛, 巴氏征阳性", treatments: ["物理/作业治疗 (运动康复)", "约束诱导运动疗法 (CIMT)", "TMS (促进卒中后皮层重组)", "BCI (脑机接口, 严重瘫痪者)", "DBS (通过基底节→丘脑→M1 改善帕金森运动功能)"], keyNote: "卒中后 M1 功能恢复依赖于健侧半球 M1 和同侧前运动皮层的代偿性重组——这是 CIMT 和运动康复的神经基础" },
      research: { classicPapers: [{ author: "Georgopoulos AP et al. (1982)", title: "On the relations between the direction of two-dimensional arm movements and cell discharge in primate motor cortex", journal: "Journal of Neuroscience" }], recentFindings: "M1 神经元不仅编码运动，还编码'运动学习'——在学习过程中，M1 的树突棘 (dendritic spines) 迅速形成和消除 (Nature 2024)", debates: "M1 编码的是'肌肉活动'还是'运动目标'？群体编码理论支持后者" }
    }
  },

  {
    id: "s1",
    name: "初级体感皮层", nameEn: "Primary Somatosensory Cortex (S1, BA 3/1/2)",
    system: "sensory", systemName: "感觉系统", color: "#20B8A6",
    position3D: [16, -20, 54], hemisphere: "bilateral",
    sliceVisible: { sagittal: true, coronal: true, axial: true },
    layers: {
      anatomy: { location: "中央后回，中央沟后方，BA 3/1/2", appearance: "清晰的六层颗粒型皮层——第IV层 (颗粒层) 发达 (接收丘脑体感输入)", relations: "前方: 中央沟/M1 | 后方: 后顶叶皮层", size: "感觉 homunculus——身体各部位按感觉灵敏度 (而非实际大小) 映射" },
      cytoarchitecture: { subnuclei: [{ name: "BA 3a", desc: "肌梭输入 (本体感觉)" }, { name: "BA 3b", desc: "皮肤慢适应受体输入 (触觉)" }, { name: "BA 1", desc: "皮肤快适应受体输入 (纹理)" }, { name: "BA 2", desc: "关节/深部组织输入 (本体感觉+大小/形状)" }], cellTypes: ["颗粒细胞 (第IV层, 接收丘脑 VPL/VPM 输入)", "锥体神经元 (第III/V层)", "多种中间神经元"], special: "S1 是少数第IV层分亚层的皮层区 (类似 V1)——反映其作为主要感觉中继站的功能" },
      functions: { primary: "躯体感觉处理——触觉、压觉、振动、本体感觉 (肢体位置觉)", computational: "层级体感处理 (BA3b→BA1→BA2); 躯体拓扑映射 (homunculus) ——相邻身体区域在 S1 中相邻代表; 可塑性——截肢后残肢的 S1 代表区被邻近身体部位'入侵' (phantom limb 基础)", paradigms: ["两点辨别阈", "触觉频率辨别", "体感诱发电位 (SEP)", "橡胶手错觉 (rubber hand illusion→S1+PCC 参与具身感)"], dissociations: "BA3b → 基本触觉 | BA1 → 纹理 | BA2 → 形状/大小/本体感觉", networks: ["感觉运动网络"] },
      connectivity: { inputs: ["丘脑 VPL/VPM (触觉/本体感觉中继)", "M1 (感觉预测/运动→感觉反馈)", "丘脑枕 (跨模态注意调制)"], outputs: ["M1 (感觉→运动整合)", "后顶叶皮层 (高级体感/空间处理)", "S2 (次级体感皮层, 双侧体感整合)", "脑岛 (内感受输入→情绪加工)"], keyCircuits: ["丘脑 VPL/VPM→S1 BA3b (初级触觉)", "S1→S2→脑岛 (触觉→情绪/内感受整合)", "S1→后顶叶 (体感→空间注意/身体表征)"], connectivityDiagram: "s1" },
      neurotransmitters: ["谷氨酸 (前馈+反馈)", "GABA (局部抑制→感受野 sharpening)"],
      clinicalRelevance: { disorders: ["幻肢痛 (截肢→S1 重组→邻近区域'入侵'→疼痛信号误归因)", "触觉失认症 (astereognosis, 不能通过触摸识别物体)", "神经病理性疼痛 (S1 过度活跃+重组)", "躯体变形障碍 (S1 体感错误表征?)", "中风→对侧感觉丧失或异常", "自闭症 (触觉过敏/迟钝可能涉及 S1 功能异常)"], symptoms: "S1 损伤 → 对侧体感丧失或减弱 (触觉/压觉/振动觉/本体感觉), 但疼痛/温度通常保留 (这些通过脊髓-丘脑通路到达脑岛而非 S1)", treatments: ["镜像疗法 (幻肢痛, 利用视觉反馈'重置'S1 身体地图)", "感觉再训练 (卒中后体感康复)", "TMS (神经病理性疼痛, 抑制 S1 过度活跃)", "分级运动想象 (GMI, 复杂区域性疼痛综合征)"], keyNote: "Ramachandran 的镜像盒 (mirror box) 是临床神经科学的经典发明——通过视觉反馈'欺骗 'S1 重组，有效缓解幻肢痛" },
      research: { classicPapers: [{ author: "Kaas JH (1997)", title: "Topographic maps are fundamental to sensory processing", journal: "Brain Research Bulletin" }, { author: "Ramachandran VS & Rogers-Ramachandran D (1996)", title: "Synaesthesia in phantom limbs induced with mirrors", journal: "Proceedings of the Royal Society B" }], recentFindings: "S1 不仅编码来自身体的体感输入——在'触觉幻觉'中 (无实际触觉刺激) S1 也被激活，反映预测编码 (Neuron 2024)", debates: "幻肢痛是由于 S1 重组 (皮层理论) 还是残肢的神经瘤放电 (外周理论) 还是两者相互作用？" }
    }
  }
];

// 按功能系统分组的颜色编码
const systemColors = {
  prefrontal:  { name: "前额叶系统", color: "#7C6FCF", description: "执行功能、情绪调节、决策、社会认知" },
  limbic:      { name: "边缘系统",   color: "#E17055", description: "情绪学习、记忆、显著性检测" },
  striatal:    { name: "纹状体/奖赏", color: "#E8913A", description: "奖赏处理、动机、习惯学习" },
  motor:       { name: "运动系统",   color: "#4A9EAA", description: "运动执行、运动学习、动作序列" },
  sensory:     { name: "感觉系统",   color: "#00A896", description: "感觉中继与处理" },
  brainstem:   { name: "脑干/调节", color: "#D4A832", description: "稳态、神经调质、防御行为" },
  whiteMatter: { name: "白质/连接", color: "#8E8E9A", description: "半球间通信、结构连接" }
};

// 导出（用于模块化加载——但在简单脚本中直接使用全局变量）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { brainRegions, systemColors };
}
