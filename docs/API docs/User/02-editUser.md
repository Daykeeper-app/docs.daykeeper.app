---
sidebar_position: 2
---

# Edit Account

### <span style={{color: 'darkblue'}}>PUT</span> `/user`

#### Description

Updates the authenticated user's profile. This route accepts multipart form data and can update text fields, privacy, password, email, timezone, and profile picture.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

#### BODY (`multipart/form-data`)

| Name          | Type      | Required | Description |
| ------------- | --------- | -------- | ----------- |
| `username`    | `string`  | No       | New username. |
| `displayName` | `string`  | No       | New display name. |
| `email`       | `string`  | No       | New email. Changing it marks the account as unverified again. |
| `bio`         | `string`  | No       | New bio. |
| `timeZone`    | `string`  | No       | New IANA timezone. |
| `private`     | `boolean` | No       | Account privacy, sent as `"true"` or `"false"` in form-data. |
| `password`    | `string`  | No       | New password. |
| `lastPassword`| `string`  | No       | Required when changing `password`. |
| `file`        | `file`    | No       | New profile picture image. |

## Usage Example

```javascript
const formData = new FormData()
formData.append("displayName", "John Doe")
formData.append("bio", "My new bio")
formData.append("private", "true")

await axios.put("https://api.daykeeper.app/user", formData, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "multipart/form-data",
  },
})
```

### Success Response

```json
{
  "message": "user updated successfully",
  "user": {
    "_id": "65cbaab84b9d1cce41e98b60",
    "username": "johndoe",
    "displayName": "John Doe"
  }
}
```

### Notes

- If `email` changes, a new verification code is generated and sent.
- If `password` is sent, `lastPassword` must also be correct.
- Duplicate username or email values are rejected.

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid email, time zone, or missing `lastPassword` |
| 401  | Wrong `lastPassword` |
| 404  | User not found |
| 409  | Email or username already in use |
| 413  | Bio, username, display name, password, or time zone too long |
| 500  | Server error |
