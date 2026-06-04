<div align="center">
  
# 🚀 Engineer Visionary Landing Page
**40년 엔지니어링 경험과 AI 기술이 융합된 인터랙티브 포트폴리오 웹페이지**

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

</div>

<br />

## 📖 About the Project

**Engineer Visionary Landing Page**는 40년 산업 현장의 정밀한 엔지니어링 경험이 현대의 AI 기술과 어떻게 결합하여 혁신적인 가치를 창출하는지 시각적으로 보여주는 랜딩페이지입니다. 

단순한 이력서나 포트폴리오를 넘어, "과거의 토대(Engineering)에서 미래의 비전(AI)"으로 나아가는 서사를 인터랙티브한 UI와 부드러운 애니메이션으로 풀어냈습니다. 사용자는 스크롤을 내리며 자연스럽게 엔지니어의 비전과 대표 프로젝트들을 경험할 수 있습니다.

> **시각적 데모 (Demo)**  
> *(여기에 프로젝트의 부드러운 스크롤이나 애니메이션을 보여주는 GIF를 추가하세요)*  
> `![Demo GIF](./img/demo.gif)`

<br />

## ✨ Key Features

- 🌀 **인터랙티브 애니메이션**: AOS(Animate On Scroll)를 활용한 부드럽고 동적인 스크롤 애니메이션 경험 제공.
- 📱 **완벽한 반응형 웹 (Responsive Design)**: 데스크탑, 태블릿, 모바일에 이르는 모든 디바이스에서 최적화된 레이아웃과 네비게이션 제공.
- 🎨 **모던 UI & Glassmorphism**: 세련된 색상 팔레트와 최신 트렌드를 반영한 카드형 레이아웃으로 직관적인 사용자 경험(UX) 극대화.
- ⚡ **경량화된 아키텍처**: 무거운 프레임워크 없이 순수 Vanilla JS, HTML, CSS만으로 구성되어 매우 빠른 초기 로딩 속도 자랑.

<br />

## 🚀 Getting Started

이 프로젝트를 로컬 환경에서 실행하고 테스트하기 위한 가이드입니다.

### Prerequisites (사전 준비물)
- 최신 버전의 웹 브라우저 (Chrome, Edge, Safari 등)
- (선택 사항) 로컬 웹 서버 실행을 위한 Node.js 및 `live-server` 

### Installation (설치 방법)

1. 리포지토리를 로컬에 클론합니다.
   ```bash
   git clone https://github.com/tintiger-byte/LandingPage.git
   ```
2. 프로젝트 디렉토리로 이동합니다.
   ```bash
   cd LandingPage
   ```
3. 로컬 서버로 실행하여 확인합니다. (VS Code의 'Live Server' 익스텐션 사용 권장)
   ```bash
   # npx가 설치된 경우 아래 명령어로 즉시 실행 가능
   npx live-server
   ```

<br />

## 💻 Usage Example

랜딩 페이지의 핵심인 네비게이션 스크롤 이동을 구현하는 간단한 바닐라 자바스크립트 예시입니다. 부드러운 스크롤(`smooth`) 속성을 사용하여 UX를 높였습니다.

```javascript
// 스무스 스크롤 네비게이션 구현 예시
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // 고정 헤더 높이만큼 보정
        behavior: 'smooth'
      });
    }
  });
});
```

<br />

## 🤝 Contribute

이 프로젝트는 오픈 소스로 열려 있으며, 언제든 여러분의 기여를 환영합니다! 기여하는 방법은 다음과 같습니다:

1. 프로젝트를 Fork 합니다.
2. 기능 브랜치를 생성합니다. (`git checkout -b feature/AmazingFeature`)
3. 변경 사항을 커밋합니다. (`git commit -m 'Add some AmazingFeature'`)
4. 브랜치에 푸시합니다. (`git push origin feature/AmazingFeature`)
5. Pull Request를 오픈해주세요.

<br />

## 📄 License

이 프로젝트는 **MIT License**에 따라 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참고해주세요.

---
<div align="center">
  <b>Engineer Visionary</b> — 어제의 정밀함으로 내일의 지능을 설계합니다.
</div>
