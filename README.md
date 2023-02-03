# 성우 아웃소싱 웹 페이지 제작

(클라이언트로부터 오디션을 보고 일을 받을 수 있는 웹 제작)

## 설치된 패키지

1. recoil
2. react-router-dom
3. bootstrap

### 1128

Main페이지 헤더 및 기본적인 레이아웃 구도 코딩
버튼 클릭 시 Modal Open코드 제작

### 1209

기획안 제작 및 최종 회의 완료

### 1210

DB구축 및 기능정리 완료

### 1223

리코일 관련 업로드는 리코일 페이지로 이전

### 0113

1. 헤더 제작 시작

### 0114

1. 헤더 제작 완료
2. router 연결 완료

### 0115

1. main, login 페이지 제작 시작

### 0116

1. header의 로그인 비로그인 시 버튼 조작 추가
2. Login페이지 제작 시작

### 0117

1. 로그인, 회원가입 라디오 버튼 추가
2. 라디오 버튼에 따라 각각 컴포넌트를 보여주게 변경
3. id 입력 추가
4. dummy 데이터를 활용해 로그인하는 작업 추가할 예정

### 0118

1. dummy데이터를 활용해 아이디를 입력받고 확인하기 완료
2. 회원가입을 통해 데이터 추가 완료
3. 추후 이것을 서버통신으로 변경하기

### 0119

1. 디테일 정리하기 (변수명과 로직)
2. 코드 간소화 및 청소

### 0120

1. 설 명절로 업로드 하루 연기

### 0121

1. 코드 정리
2. 헤더의 로그인 로그아웃부분 삼항연산자로 처리
3. 로그인 페이지 변경 예정

### 0125

1. 로그인, 회원가입 개발 완료

### 0126

1. Login시 버튼 추가
2. Main, Header 마무리 작업 예정

### 0127

1. Bootstrap 활용을 위한 공부 및 실습

### 0128

1. Bootstrap 사용법 문서로 정리

### 0130

1. 로그인, 회원가입 Modal로 변경

### 0131

1. Modal 변경 완료
2. Main에 Carousel 적용

### 0204

MyModal을 관리해주는 Custom Hook을 제작했으나 Bootstrap에서 제공하는 Modal은 State를 불러오는 순간
그 State에 ref를 고정시켜 Recoil로 지정할 시 마지막에 불러온 데이터를 중복시켜서 띄워준다
즉, 상태관리를 Recoil로 할 경우 마지막 데이터값만을 불러오게 된다 (마지막으로 true를 반환한 컴포넌트의 Recoil값이 ref에 저장돼서 같은 Recoil을 주시하고 있는 모든 Modal값이 같아짐 -> 결과적으로 회원가입과 로그인 창이 중복돼서 나타난다)
따라서 일단 Custom Hook을 포기하고 useState로 진행하기로 결정
