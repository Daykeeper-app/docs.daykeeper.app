---
sidebar_position: 2
---

# Search

### <span style={{color: 'green'}}>GET</span> `/search`

#### Description

Searches DayKeeper content for posts, users, events, or tasks. The backend normalizes the requested `type`, applies optional filters, and returns paginated results.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

Send a valid bearer token in the `Authorization` header.

#### QUERY PARAMS

| Name          | Type     | Required | Description                                                                                           |
| ------------- | -------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `q`           | `string` | No       | Search text. If omitted, the endpoint still runs and returns paginated results from the chosen type. |
| `type`        | `string` | No       | `Post`, `User`, `Event`, or `Task`. Default is `Post`.                                                |
| `order`       | `string` | No       | `relevant` or `recent`. Default is `relevant`.                                                        |
| `following`   | `string` | No       | For `Post` and `User` searches only. Use `following` or `friends`.                                    |
| `filter`      | `string` | No       | For `Event`: `upcoming`, `past`, `ongoing`. For `Task`: `upcoming` or `past`.                        |
| `page`        | `number` | No       | Page number. Defaults to `1`.                                                                         |
| `maxPageSize` | `number` | No       | Number of results returned per page. Maximum is `20`.                                                 |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://api.daykeeper.app/search", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  params: {
    q: "luciano",
    type: "User",
    order: "relevant",
    page: 1,
  },
})
```

### Search Behavior

- `type=Post` searches post date, post content, and the post author's username.
- `type=User` searches `username` and `displayName`.
- `type=Event` and `type=Task` support the `filter` query param for time-based filtering.
- `following=following` returns only accounts or posts from users the authenticated user follows.
- `following=friends` returns only mutual follow relationships.

### Success Response

| Name          | Type     | Description                                             |
| ------------- | -------- | ------------------------------------------------------- |
| `data`        | `array`  | Search results for the current page                     |
| `page`        | `number` | Current page number                                     |
| `pageSize`    | `number` | Number of results returned in the current page          |
| `maxPageSize` | `number` | Maximum number of results allowed per page              |
| `totalPages`  | `number` | Total available pages                                   |
| `totalCount`  | `number` | Total number of records that match the current request  |

#### Example

```json
{
  "data": [
    {
      "_id": "6632d8575e64a71b55427a8d",
      "username": "Luciano655",
      "displayName": "Luciano",
      "bio": "my bio here",
      "private": false,
      "followers": 12,
      "following": 8
    },
    {
      "_id": "65cbaab84b9d1cce41e98b60",
      "username": "Luciano",
      "displayName": "Luciano Menezes",
      "bio": "Essa é a minha bio",
      "private": false,
      "followers": 4,
      "following": 6
    }
  ],
  "page": 1,
  "pageSize": 2,
  "maxPageSize": 20,
  "totalPages": 1,
  "totalCount": 2
}
```

### Error Response

| Code | Description                       |
| ---- | --------------------------------- |
| 401  | Missing, invalid, or expired token |
| 500  | Server error                      |

#### Example

```json
{
  "message": "Missing access token"
}
```
