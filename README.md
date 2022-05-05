# 야구는 아니지만 야구게임

[바로가기](https://brightyoung219.github.io/number-baseball-game/){:target="_blank"}

<img width="997" alt="스크린샷 2022-05-06 오전 12 08 54" src="https://user-images.githubusercontent.com/104407191/166954513-a61258fe-fdae-4311-8e98-4eeeb27703c9.png">


## 프로젝트 목표
- React를 활용한 간단한 게임 구현

## 프로젝트에 사용한 기술
- React : useState, useEffect, bootstrap, react-router 등
- scss : nesting, extend를 이용한 스타일 작성

## 프로젝트의 기능설명

게임 페이지가 로드되면 랜덤의 4자리 숫자가 정해지며, 10번의 기회안에 랜덤 숫자를 맞추는 게임

#### 1. Input 입력값 검증
#### 중복되지 않는 숫자, 0을 제외한 숫자, 4자리 숫자, 이미 입력한값을 제외한 숫자
<img width="300" alt="기능설명화면1" src="https://user-images.githubusercontent.com/104407191/166961711-e7826893-eb8b-4ef7-b926-3ef3c4f55e26.jpg">


#### 2. Input 입력값을 랜덤숫자와 비교하여 몇 스트라이크 몇 볼인지 출력
#### input값을 입력할때마다 도전기회 -1, 0볼 0스트라이크일 경우 아웃 +1  
<img width="300" alt="기능설명화면2" src="https://user-images.githubusercontent.com/104407191/166959664-8e63e521-530c-4277-a3a1-b02d134d7695.png">


#### 3. 스트라이크인 경우 화면에 정답 출력
<img width="300" alt="기능설명화면3" src="https://user-images.githubusercontent.com/104407191/166960855-3bcd64d6-7f57-4399-87d0-2906519793db.png">


#### 4. 정답을 맞출 경우 win 화면 출력, 3아웃이 되거나 10회 안에 정답을 못 맞췄을 경우 gameover화면 출력
<img width="300" alt="기능설명화면4" src="https://user-images.githubusercontent.com/104407191/166960364-ee2321b8-f697-40a1-b98b-32a35a7183f3.png">
<img width="300" alt="기능설명화면4" src="https://user-images.githubusercontent.com/104407191/166960409-93146396-5d5a-43d2-a1ca-4751d48f2d90.png">

