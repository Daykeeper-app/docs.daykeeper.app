---
sidebar_position: 1
---

# Get User

### <span style={{color: 'green'}}>GET</span> `/:username`

#### Description

Fetches a user profile by username or user ID. The response is shaped for the authenticated viewer, so follow and privacy-related fields can vary depending on who is requesting it.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### PATH PARAMS

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `username` | `string` | Yes      | Username or MongoDB user ID. |

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/johndoe", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "user fetched successfully",
  "data": {
    "_id": "65cbaab84b9d1cce41e98b60",
    "username": "johndoe",
    "displayName": "John Doe",
    "email": "johndoe@example.com",
    "private": false
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing or invalid access token |
| 404  | User not found |
| 500  | Server error |
