import americano from "../assets/images/coffee/americano.png";
import apogato from "../assets/images/coffee/apogato.png";
import aspresso from "../assets/images/coffee/aspresso.png";
import black_sesame from "../assets/images/coffee/black_sesame.png";
import bubble from "../assets/images/coffee/bubble.png";
import carrot from "../assets/images/coffee/carrot.png";
import choco from "../assets/images/coffee/choco.png";
import dalgona from "../assets/images/coffee/dalgona.png";
import greentea from "../assets/images/coffee/greentea.png";
import hubtea from "../assets/images/coffee/hubtea.png";
import lemon from "../assets/images/coffee/lemon.png";
import mango from "../assets/images/coffee/mango.png";
import mint from "../assets/images/coffee/mint.png";
import strawberry from "../assets/images/coffee/strawberry.png";
import ujacha from "../assets/images/coffee/ujacha.png";
import vanilla from "../assets/images/coffee/vanilla.png";

export const result_obj = {
   INFP: {
      title: "아포가토",
      coffee: "아포가토",
      point_wording: "이상적인 세상을 만들어가고 싶어!",
      img_url: apogato,
      good_list: [
         "공감능력이 뛰어나고 배려심이 좋아요",
         "내 공간 안으로 들어온 친구나 연인에게 모든 것을 오픈하는 편이에요",
         "완벽하지 못할거라면 아예 시작도 안하는 완벽주의자에요",
         "세상은 아름다워요 🌞",
      ],
      bad_list: [
         "남의 비판에 상처를 잘 받는 유리멘탈이에요",
         "백번 잘해줘도 한번 반응 안해주면 '내가 뭐 잘못했나?' 생각해요",
         "사람들이 많은 조직에서는 낯을 많이 가려요",
      ],
      best_chemi: "ENFJ",
      worst_chemi: "ISFP",
   },
   INFJ: {
      title: "흑임자라떼",
      coffee: "흑임자라떼",
      point_wording: "내가 좀 따뜻한 사람이야~",
      img_url: black_sesame,
      good_list: [
         "다른사람에게 공감을 잘해서 상대방 기분에 금방 이입할 수 있어요",
         "남들에게 착하다는 소리를 많이 들어요",
         "조금 피곤하지만 인싸인 척 할 수 있어요",
         "할 일은 미리미리 하는편이에요",
      ],
      bad_list: [
         "낯가림이 있는 편이라 모임에서 대화를 주도하는 편은 아니에요",
         "상대가 자신만의 선을 넘으면 마음의 문을 잠궈버려요 (조심해주세요!)",
         "혼자만의 고민과 내적 갈등이 많아요",
      ],
      best_chemi: "ENFP",
      worst_chemi: "ISFP",
   },
   INTP: {
      title: "버블티",
      coffee: "버블티",
      point_wording: "제일 잘하는거? 방탈출이요ㅎ",
      img_url: bubble,
      good_list: [
         "상상력이 풍부하고 분석도 잘하는 편이에요",
         "자기 주관이 뚜렷하고 호불호가 확실해요",
         "감수성이 풍부하지만 상처를 잘 받지는 않아서, 꼭 필요한게 아니라면 금방 잊어버려요",
         "친한 사람들은 내 진짜 모습을 잘 알아요",
      ],
      bad_list: [
         "친한 친구라도 연락하는게 귀찮을때가 많아요",
         "관계에 얽매이기 싫어서 가는사람 붙잡지 않아요",
         "호기심은 많지만 찾아보기는 귀찮아요",
         "미루기의 끝판왕이에요 (귀찮은거 딱 질색)",
      ],
      best_chemi: "ENFJ",
      worst_chemi: "ISTJ",
   },
   INTJ: {
      title: "민트초코칩 프라푸치노",
      coffee: "민트초코칩 프라푸치노",
      point_wording: "사실 내가 최고인거같아!",
      img_url: mint,
      good_list: [
         "자신의 능력에 확고한 믿음이 있는 자존감 높은 타입이에요. 내가 너무 좋아 짱이야!",
         "개인주의 성향이 강하고 독립적인 타입으로 혼자 노는것도 즐거워요!",
         "완벽을 추구하는 스타일이라 세세한 계획을 세우는 걸 좋아해요",
         "팩트와 원칙을 중요하게 생각해요",
      ],
      bad_list: [
         "빨리빨리! 답답하게 기다리는 건 잘 못해요 (저기.. 앞에 좀 비켜주세요)",
         "사소한 감정에 휘둘리는건 싫어요",
         "사실 이런 테스트 왜 하는지 잘 모르겠어요 (신빙성 x)",
      ],
      best_chemi: "ENTP",
      worst_chemi: "ISFJ",
   },
   ISFP: {
      title: "유기농 당근주스",
      coffee: "유기농 당근주스",
      point_wording: "칭찬해주는 사람 너무 좋아!",
      img_url: carrot,
      good_list: [
         "순둥이 그 자체! 쉽게 거절하지 못하고 양보도 곧 잘 하는 타입이에요",
         "어떤사람을 만나도 원만하게 잘지내요",
         "호기심이 많아 주변사람 관찰을 잘 해서 눈치가 빠른 편이에요",
      ],
      bad_list: [
         "언뜻 보면 바쁘게 사는 것 같지만 누구보다 게을러서 미룰 수 있는건 끝까지 미뤄요",
         "배려를 잘 하는것 같지만 사실 속으론 비판의식 장난 아니에요",
         "사람 만나는 것도 좋지만 싫어요 ( 사실 귀찮음!)",
      ],
      best_chemi: "ESFJ",
      worst_chemi: "INFP",
   },
   ISFJ: {
      title: "핸드메이드 유자차",
      coffee: "핸드메이드 유자차",
      point_wording: "거절? 거절이 뭐죠?ㅎㅎ",
      img_url: ujacha,
      good_list: [
         "책임감 있는 타입이고 질서 있는 환경이 좋아요",
         "다른 사람의 감정을 잘 캐치하고, 공감도 잘 해줘요",
         "계획대로 움직여야 내 마음이 편해요",
         "신세지는 것도, 피해주는 것도 싫어요",
      ],
      bad_list: ["전화가 오면 엄청 고민하고 받아요", "거절 잘 못하고, 부탁도 잘 못해요", "내 눈 밖에 나면 이성적인 생각은 모르겠고 그냥 미워요"],
      best_chemi: "ESFP",
      worst_chemi: "ENFP",
   },
   ISTP: {
      title: "에스프레소",
      coffee: "에스프레소",
      point_wording: "논리적이며 적응력이 뛰어난 사람!",
      img_url: aspresso,
      good_list: [
         "적게 일하고 많이 버는게 인생의 목표에요",
         "한 번 꽂히면 질릴 때까지 물고 늘어져요. (이 영역의 일인자는 나였으면ㅎ)",
         "마음에 없는 소리는 잘 하지 않아요 (차라리 말을 안해요)",
      ],
      bad_list: ["쓸데없는 것에 매우 계획적이에요", "인간관계에서 선 긋기에 달인이에요", "내 말 하는데 급해서 배려심 없어보일 수 있어요"],
      best_chemi: "ESTJ",
      worst_chemi: "INFP",
   },
   ISTJ: {
      title: "허브티",
      coffee: "허브티",
      point_wording: "책임감 있는 사람, 약속 잘 지키는 사람이 좋아!",
      img_url: hubtea,
      good_list: [
         "맡은 일은 신중하고 책임감있게 처리해요",
         "쉽게 흥분하지 않는 늘 차분한 성격이에요",
         "명확하게 결과를 만들 수 있는 일을 선호해요",
         "반복되는 일상적인 일을 잘 견뎌요",
      ],
      bad_list: [
         "내 얘기를 하는 것도 별로 안좋아고, 남의 얘기를 듣는것도 즐거운 일은 아니에요",
         "다른 사람일에 관심 가지는 건 조금 귀찮은 일이에요",
         "앞뒤 다른 사람, 약속 어기는 사람이 세상에서 제일 싫어요",
      ],
      best_chemi: "ESTP",
      worst_chemi: "INFP",
   },
   ENFP: {
      title: "망고 요거트 쉐이크",
      coffee: "망고 요거트 쉐이크",
      point_wording: "새로운 친구 좋아!><",
      img_url: mango,
      good_list: ["혼자보단 함께하는게 좋아요! 새로운 친구 좋아!", "표현력이 풍부하고 리액션 최고에요", "생각보다 속이 깊고 진국이에요"],
      bad_list: ["아이같고 철없어보일 수 있어요", "계획적이기보다는 다소 충동적일 때가 더 많아요", "모임에서 소외되는건 싫어요ㅠ"],
      best_chemi: "INFJ",
      worst_chemi: "ESTJ",
   },
   ENFJ: {
      title: "초코홀릭 초코라떼",
      coffee: "초코홀릭 초코라떼",
      point_wording: "저 같이 리액션 좋은 사람 찾아요~",
      img_url: choco,
      good_list: ["온화하지만 활기찬 성격이에요", "남에게는 관대하지만 나에게는 엄격해요", "눈치가 빠르고 센스있는 편이에요"],
      bad_list: ["귀가 얇아요", "맘에 안들어도 쉽게 표현하지 않고, 사람들과 싸우는걸 싫어해요", "하지만 화나서 이성을 잃으면 팩트 폭격기로 변해요"],
      best_chemi: "INFP",
      worst_chemi: "ESTP",
   },
   ENTP: {
      title: "아이스 아메리카노",
      coffee: "아이스 아메리카노",
      point_wording: "열정! 열정! 열정!!!",
      img_url: americano,
      good_list: [
         "폭넓은 관심사와 취미활동을 가지고 있어요",
         "관심 가진건 뭐든 잘할 수 있어요",
         "독립심이 강하고 창의적인게 좋아요",
         "남 하는대로 똑같이 맞춰가기는 싫어요",
      ],
      bad_list: ["지시받는게 너무 싫어요", "감정기복이 심한 변덕쟁이에요", "하나에 꽂히면 다른건 신경안쓰고 그것만 해요"],
      best_chemi: "INTJ",
      worst_chemi: "ESTJ",
   },
   ENTJ: {
      title: "바닐라라떼",
      coffee: "바닐라라떼",
      point_wording: "매 순간 감정적인 사람은 NO!",
      img_url: vanilla,
      good_list: [
         "순수하게 사람들을 궁금해해요",
         "끈기와 책임감이 뛰어나 맡은 일에 항상 최선을 다해요",
         "고민이 있을 때, 논리적으로 해결방법을 생각해요",
      ],
      bad_list: ["내가 하기 싫은 건 죽어도 안해요", "피해받는게 싫고, 남 일에도 별로 관심이 없어요", "우유부단한 사람, 고집 센 사람은 별로에요"],
      best_chemi: "INTP",
      worst_chemi: "ESFJ",
   },
   ESFP: {
      title: "딸기 딜라이트 요거트 블렌디드",
      coffee: "딸기 딜라이트 요거트 블렌디드",
      point_wording: "우주 최강 오지라퍼!",
      img_url: strawberry,
      good_list: [
         "슈퍼인싸! 처음 보는 사람에게 다가가는건 두렵지 않아요",
         "뭐든지 즉흥적으로 하는 일이 제일 재밌어요",
         "핵인싸이기때문에 유행은 꼭 따라줘야해요",
         "혼자보단 여럿이서 하는일이 좋고, 앉아만 있는일보단 활동적인게 좋아요",
      ],
      bad_list: [
         "일 크게 벌이는걸 좋아해요 (마무리는..ㅎ)",
         "계획과 규칙에 얽매인 꼰대가 너무 싫어요",
         "계획적인 소비는 재미없어요. 충동적 구매가 짱!",
      ],
      best_chemi: "ISFJ",
      worst_chemi: "INFP",
   },
   ESFJ: {
      title: "그린티 라떼",
      coffee: "그린티 라떼",
      point_wording: "안녕? 내 이름은 평화주의자. 그린티 라떼죠ㅎ",
      img_url: greentea,
      good_list: [
         "모두가 행복하고 평화로운 세상이 좋아요",
         "자연스럽게 분위기를 주도하거나 리더 역할을 잘 해내요",
         "대화를 좋아하고 고민상담도 곧잘 해줘요",
         "상대방을 신경써주고 배려해주는 착한 이미지에요",
      ],
      bad_list: [
         "사소한 문제에 상처받고, 마음에 꼭 담아둬요",
         "일어나지도 않은 상황에 대해 쓸데없이 걱정하는 스타일이에요",
         "진심으로 공감을 하진 않지만, 공감하는 척 할 수 있어요",
      ],
      best_chemi: "ISTP",
      worst_chemi: "ENFJ",
   },
   ESTP: {
      title: "레몬에이드",
      coffee: "레몬에이드",
      point_wording: "집착은 싫어요, 제 맘대로 할거에요!",
      img_url: lemon,
      good_list: [
         "개방적인 스타일이라 누구와도 친해질 수 있어요",
         "모임에 절대 빠지지 않는 프로 참석러이자 분위기 메이커에요",
         "매사에 열정가득! 하고싶은건 다 해야해요",
      ],
      bad_list: [
         "오늘의 일은 깔끔하게 내일의 나에게 미뤄요",
         "직설적으로 감정을 표현해서 듣는 사람이 상처받을 수 있어요",
         "나를 통제하려고 하면 화가나요!",
      ],
      best_chemi: "ISTJ",
      worst_chemi: "ENFJ",
   },
   ESTJ: {
      title: "1000번 휘저은 달고나 커피",
      coffee: "1000번 휘저은 달고나 커피",
      point_wording: "이성적인 생각 금지? 그거 어떻게 하는건데?",
      img_url: dalgona,
      good_list: [
         "모든 일을 충실하고 계획적으로 차근차근 해결할 수 있어요",
         "과정보다는 결과가 더 중요해요",
         "누가 더 잘못했는지 객관적으로 판단할 수 있지만, 굳이 말하진 않아요",
         "깔끔하게 정리된 책상이 너무 좋아요",
      ],
      bad_list: [
         "내 말이 무조건 다 맞아요",
         "꼰대에요 (본인은 진심어린 충고과 조언을 해주는거라고 착각해요)",
         "외로움을 잘 못느끼는 편이라서 외로워하는 사람들을 이해할 수 없어요",
      ],
      best_chemi: "ISFP",
      worst_chemi: "ENFJ",
   },
};
