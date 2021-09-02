## Ch01. GraphQL

### 1. GraphQL 이란
- API를 위한 쿼리 언어이며 이미 존재하는 데이터로 쿼리를 수행하기 위한 런타임
- 클라이언트에게 요청한 만큼의 데이터를 제공하는 데 우선 순위둠
- 페이스북에서 만든 API로 쿼리를 호출 할 수 있게 함

```bash
# 예시
{
  product(id:1) {
    id
    price
    name
  },
  cart(user_id:10) {
    thumbnail
    price
  }
}
```