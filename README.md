# WayTest Client

waytest는 "who are you test"입니다.

---

## Component

1. Quest
   -  QuestBox : 선택 전체 화면
   -  QuestHeader : page count (Q1 + 1/10)
   -  QuestContent : 검사문항 (글 + 그림)
   -  AnswerButton : 선택 버튼
   -  AnswerButtonList : 선택 버튼 리스트 (2개)

---

## Storybook

waytest-storybook https://www.chromatic.com/library?appId=60ffba1633991c0039ce5588

참고 문서 : https://storybook.js.org/tutorials/intro-to-storybook/react/en/get-started/

@storybook/addon-storyshots 설치 시 명령문

```
npm i @storybook/addon-storyshots --legacy-peer-deps
```

storybook build 시 명령문

```
npx chromatic --project-token <your-project-token>
```

---

## TEST 코드

React Testing with JEST
참고 튜토리얼 : https://www.youtube.com/watch?v=ML5egqL3YFE&t=162s

---

## 새로 알게된 것

#### 새로 알게된 HTML 태그

-  q : 양쪽에 따옴표를 넣어 인용구를 표현
-  blockquote : block style의 인용구를 표현 (다른 출처에서 인용한 문구를 표현하는데 적합)
