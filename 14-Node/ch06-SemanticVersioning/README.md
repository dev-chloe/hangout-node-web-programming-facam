## Ch06. SemanticVersioning

### 1. SemanticVersioning
- 시맨틱 버저닝(Semantic Versioning)은 소프트웨어의 버전 변경 규칙에 대한 제안이다.


|            코드 상태           |     단계    |               규칙                             |  예시 버전  | 
| :--------------------------: | :--------: | :-------------------------------------------: | :---:    | 
| 최초 공개                      | 신상품       | 1.0.0으로 시작                                  | 1.0.0    | 
| 이전 버전과 호환되는 버그 수정      | 패치 릴리스   | 세 번째 숫자 증가                                 | 1.0.1    | 
| 이전 버전과 호환되는 새로운 기능     | 마이너 릴리스 | 중간 자릿수를 증가시키고 마지막 자릿수를 0으로 재설정      | 1.1.0    | 
| 이전 버전과의 호환성을 깨는 변경 사항 | 주요 릴리스  | 첫 번째 숫자를 증가시키고 중간 및 마지막 숫자를 0으로 재설정 | 2.0.0    | 

