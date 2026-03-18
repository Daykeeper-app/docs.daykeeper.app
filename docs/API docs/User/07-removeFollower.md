---
sidebar_position: 7
---

# Remove Follower

### <span style={{color: 'darkred'}}>DELETE</span> `/:name/follower`

#### Description

Removes a follower from the authenticated account. This route only works when the authenticated account is private.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name   | Type     | Required | Description |
| ------ | -------- | -------- | ----------- |
| `name` | `string` | Yes      | Username of the follower to remove. |

## Usage Example

```javascript
await axios.delete("https://api.daykeeper.app/johndoe/follower", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "johndoe's follow removed successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 402  | Target user is banned |
| 403  | Account is not private |
| 404  | User not found or does not follow you |
| 500  | Server error |
