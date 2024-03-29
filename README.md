# 메모, 일기 서비스

프로젝트를 시작하게 된 이유는 메모와 일기를 작성함으로써 일상생활에 많은 도움을 받고 있고 그렇기 때문에 매일 일기를 작성하고 많은 메모를 작성하고 있습니다. 매일 많은 시간 사용하는 서비스를 직접 만들어보고 사용해보고 싶어서 프로젝트를 시작하게 되었습니다.

## 설명

이 프로젝트는 사용자가 간단한 메모와 일기를 작성할 수 있는 웹 어플리케이션입니다. 사용자는 간단한 인터페이스를 통해 새로운 메모와 일기를 작성하고, 수정하며, 삭제할 수 있습니다.

## 배포 링크

[배포 링크](https://memo-diary.netlify.app/)

## 설치 및 실행 방법

1. 이 레포지토리를 클론합니다.

```bash
# 레포지토리 클론
git clone https://github.com/ws8313/memo-diary.git
```

2. 클론한 폴더로 이동하여 npm 패키지를 설치합니다.

```bash
# 클론한 폴더로 이동
cd memo-diary

# 패키지 설치
npm install
```

3. 어플리케이션을 실행합니다.

```bash
# 어플리케이션 실행
npm start
```

4. 브라우저에서 http://localhost:3000 으로 접속합니다.

## 사용 방법

1. 어플리케이션에 접속합니다.
2. 원하는 날짜를 달력에서 선택합니다.
3. 선택한 날짜에 작성한 메모와 일기, 감정를 확인하거나, 새로운 메모와 일기, 감정을 작성합니다.
4. 작성한 메모와 일기, 감정을 수정하거나, 삭제할 수 있습니다.

## 기능

- 달력

  - 일기를 작성한 날짜에 어떤 감정인지 색상으로 보여주기
  - 달력에서 날짜 선택하기
  - 선택한 날짜에 작성한 메모와 일기 보기

- 메모, 일기

  - 원하는 날짜에 메모, 일기, 감정 작성하기
  - 원하는 날짜에 메모, 일기, 감정 수정하기
  - 원하는 날짜에 메모, 일기, 감정 삭제하기

- 환경설정
  - 비밀번호를 설정하여 잠금모드 변경하기
  - 글꼴 변경하기

## 개발환경

- React
- react-router-dom
- styled-components
- react-calendar
- moment
- react-icons
