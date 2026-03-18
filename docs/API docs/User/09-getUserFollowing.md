---
sidebar_position: 9
---

# Get User Following

### <span style={{color: 'darkgreen'}}>GET</span> `/:username/following`

#### Description

Returns a paginated list of accounts followed by a user.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Username of the target account. |

#### QUERY PARAMS

| Name          | Type     | Required | Description |
| ------------- | -------- | -------- | ----------- |
| `page`        | `number` | No       | Page number. Default is `1`. |
| `maxPageSize` | `number` | No       | Page size. Maximum is `20`. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/johndoe/following", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "Following fetched successfully",
  "data": [],
  "page": 1,
  "pageSize": 0,
  "maxPageSize": 20,
  "totalPages": 0,
  "totalCount": 0
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | One of the users is blocked |
| 404  | User not found |
| 409  | Private account route not accessible to the viewer |
| 500  | Server error |
