---
sidebar_position: 1
---

# Feed

### <span style={{color: 'green'}}>GET</span> `/`

#### Description

Returns the authenticated user's feed. The backend builds this feed from visible users and their recent posts, respecting privacy, follow relationships, close-friends visibility, and pagination rules.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

Send a valid bearer token in the `Authorization` header.

#### QUERY PARAMS

| Name              | Type     | Required | Description                                                                                     |
| ----------------- | -------- | -------- | ----------------------------------------------------------------------------------------------- |
| `page`            | `number` | No       | Page number. Defaults to `1`.                                                                   |
| `maxPageSize`     | `number` | No       | Number of users returned per page. Maximum is `20`.                                             |
| `maxPostsPerUser` | `number` | No       | Maximum number of posts included per user in the feed. Maximum is `3`.                          |
| `order`           | `string` | No       | Sorting mode. Use `recent` or `relevant`. Default is `recent`.                                  |
| `date`            | `string` | No       | Exact day filter in `DD-MM-YYYY` format. When present, the feed is narrowed to that local day. |
| `days`            | `number` | No       | Rolling date window in days when `date` is not provided. Defaults to `30`, max `365`.          |

## Usage Example

#### JavaScript with <a href="https://axios-http.com/docs/intro">axios</a>:

```javascript
const response = await axios.get("https://api.daykeeper.app/", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  params: {
    page: 1,
    order: "recent",
    days: 30,
  },
})
```

### Success Response

| Name          | Type     | Description                                             |
| ------------- | -------- | ------------------------------------------------------- |
| `data`        | `array`  | Feed items for the current page                         |
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
      "following": 8,
      "isFollowing": 1,
      "posts": [
        {
          "_id": "6639185cfc7a0435b0b208a6",
          "title": "06-05-2024",
          "data": "Meu postzinho bacana do dia 06-05",
          "created_at": "2024-05-06T17:50:20.071Z"
        }
      ]
    }
  ],
  "page": 1,
  "pageSize": 1,
  "maxPageSize": 20,
  "totalPages": 1,
  "totalCount": 1
}
```

### Notes

- The feed endpoint does not use `q`, `type`, or `following` query params.
- Private users are hidden unless the logged-in user is allowed to see them.
- Close-friends-only posts are filtered according to the close-friends relationship.
- If no items match, the API returns `data: []` with paging metadata.

### Error Response

| Code | Description                       |
| ---- | --------------------------------- |
| 401  | Missing, invalid, or expired token |
| 500  | Server error                      |

#### Example

```json
{
  "message": "Invalid or expired access token"
}
```
