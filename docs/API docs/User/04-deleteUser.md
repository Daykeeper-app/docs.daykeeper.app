---
sidebar_position: 4
---

# Delete Account

### <span style={{color: 'darkred'}}>DELETE</span> `/user`

#### Description

Soft-deletes the authenticated user's account and clears related data. This route requires both the account password and the delete code requested through the auth flow.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### BODY

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `password` | `string` | Yes      | Current account password. |
| `code`     | `string` | Yes      | Delete-account verification code sent by email. |

## Usage Example

```javascript
await axios.delete("https://api.daykeeper.app/user", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
  data: {
    password: "MyPassword123",
    code: "123456",
  },
})
```

### Success Response

```json
{
  "message": "User deleted successfully",
  "user": {
    "_id": "65cbaab84b9d1cce41e98b60",
    "status": "deleted"
  },
  "posts_likes": 2,
  "comments": 4,
  "comments_likes": 1,
  "followers": 3,
  "posts": 5,
  "reports": 0,
  "ban_history": 0
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Password or code missing |
| 401  | Invalid password or verification code |
| 403  | Password-based deletion not allowed for this account |
| 404  | User not found |
| 500  | Server error |
