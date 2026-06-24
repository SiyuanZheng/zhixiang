# 五律归元・五行疗愈香牌沙龙

五行疗愈香牌沙龙演示幻灯片项目。

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Lucide React (图标)

## 项目结构

```
xiangpai/
├── src/
│   ├── components/
│   │   ├── SlideNavigation.tsx    # 幻灯片导航按钮
│   │   └── SlideProgress.tsx      # 进度条和章节名
│   ├── data/
│   │   └── slides.tsx             # 所有幻灯片内容
│   ├── pages/
│   │   └── Presentation.tsx       # 主展示页面
│   ├── types/
│   │   └── presentation.ts        # 类型定义
│   ├── App.tsx                    # 应用入口
│   ├── index.css                  # 全局样式
│   └── main.tsx                   # React 渲染入口
├── index.html                     # HTML 模板
├── package.json                   # 依赖配置
├── vite.config.ts                 # Vite 配置
├── tsconfig.json                  # TypeScript 配置
└── README.md                      # 项目说明
```

## 安装与运行

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 预览构建结果
npm run preview
```

## 幻灯片内容

共 26 张幻灯片，包含以下章节：

1. **封面** - 五律归元・五行疗愈香牌沙龙
2. **一、开场** - 以香为镜，照见情绪
3. **二、合香历史** - 先秦/汉代/宋代/明清至今
4. **三、情绪与五行** - 五行五脏情绪对应
5. **四、情绪香粉** - 金木水火土各对应香材介绍
6. **五、互动一** - 情绪卡破冰
7. **六、互动二** - 正念闻香
8. **七、互动三** - 调香意图立愿
9. **八、香牌制作** - 六步疗愈之旅（选方/和香/入模/打孔/阴干/穿绳）
10. **九、收尾祝福仪式** - 愿它……
11. **结尾** - 愿你携香而行，岁岁从容

## 操作说明

- **方向键 ← →** 或 **空格键** - 切换幻灯片
- 点击右下角箭头按钮 - 切换幻灯片
- 页面自动根据窗口大小等比缩放

## 设计风格

- 画布尺寸：1440 × 810 px
- 字体：Noto Serif SC（思源宋体）
- 主色调：暖白色背景 + 深灰文字 + 金棕色强调
- 五行配色：木(绿)、火(红)、土(金黄)、金(灰)、水(深蓝)
