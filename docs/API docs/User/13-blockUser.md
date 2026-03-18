---
sidebar_position: 13
---

# Block User

### <span style={{color: 'darkorange'}}>POST</span> `/:username/block`

#### Description

Blocks or unblocks a user. When a block is created, follow relationships between the two users are removed.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Target username. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/johndoe/block",
  {},
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }
)
```

### Success Response

```json
{ "message": "johndoe blocked successfully" }
```

or

```json
{ "message": "johndoe unblocked successfully" }
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | Target user is banned |
| 404  | User not found |
| 400  | You cannot block yourself |
| 500  | Server error |
