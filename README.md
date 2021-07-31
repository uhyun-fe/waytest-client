# WayTest Client

https://waytest.netlify.app/

waytest는 "who are you test"입니다.

-  배포 : netlify https://velog.io/@feyouhyun0957/react-netlify-%EB%B0%B0%ED%8F%AC

---

## Component

1. Intro

   -  IntroPage : 메인 시작화면

2. Quest

   -  QuestTitle : 질문별 질문제목 영역
   -  AnswerBox : 질문별 답안선택 영역
   -  ProgressBar : 테스트 진행상황 표시 영역

3. Result
   -  ResultTitle : 결과 유형 타이틀 영역

---

## Storybook

waytest-storybook https://www.chromatic.com/library?appId=60ffba1633991c0039ce5588

@storybook/addon-storyshots 설치 시 명령문

```
npm i @storybook/addon-storyshots --legacy-peer-deps
```

storybook build 시 명령문

```
npx chromatic --project-token <your-project-token>
```

참고 문서 : https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/

---

## TEST 코드

React Testing with JEST

참고 튜토리얼 : https://www.youtube.com/watch?v=ML5egqL3YFE&t=162s

---

## 새로 알게된 것

#### 새로 알게된 HTML 태그

-  q : 양쪽에 따옴표를 넣어 인용구를 표현
-  blockquote : block style의 인용구를 표현 (다른 출처에서 인용한 문구를 표현하는데 적합)
