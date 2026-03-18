---
sidebar_position: 5
---

# Follow/Unfollow User

### <span style={{color: 'darkorange'}}>POST</span> `/:username/follow`

#### Description

Follows, unfollows, requests to follow, or withdraws a pending request depending on the current relationship and the target account privacy.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Target username. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/johndoe/follow",
  {},
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
```

### Success Response

Possible messages include:

```json
{ "message": "You started following johndoe" }
```

```json
{ "message": "You unfollowed johndoe" }
```

```json
{ "message": "You sent a follow request to johndoe" }
```

```json
{ "message": "You have withdrawn your request to follow johndoe" }
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | One of the users is blocked or the target is banned |
| 404  | User not found |
| 400  | You cannot follow yourself |
| 500  | Server error |
