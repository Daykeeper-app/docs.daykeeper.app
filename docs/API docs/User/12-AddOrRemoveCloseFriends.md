---
sidebar_position: 12
---

# Add/Remove Close Friend

### <span style={{color: 'darkorange'}}>POST</span> `/close_friends/:username`

#### Description

Adds a user to the authenticated user's close-friends list, or removes them if they are already present.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Target username. |

## Usage Example

```javascript
await axios.post(
  "https://api.daykeeper.app/close_friends/johndoe",
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
{
  "message": "You added johndoe to your Close Friends"
}
```

or

```json
{
  "message": "You removed johndoe from your Close Friends"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 404  | User not found |
| 400  | You cannot add yourself |
| 500  | Server error |
