---
sidebar_position: 3
---

# Login (username/password)

### <span style={{color: 'darkorange'}}>POST</span> `/auth/login`

#### Description

Logs in with a local account and returns an access token plus a refresh token.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### BODY

| Name       | Type     | Required | Description |
| ---------- | -------- | -------- | ----------- |
| `email`    | `string` | Yes      | Despite the field name, this can be either the user's email or username. |
| `password` | `string` | Yes      | Account password. |
| `deviceId` | `string` | No       | Optional device identifier stored with the refresh token. |

## Usage Example

```javascript
await axios.post("https://api.daykeeper.app/auth/login", {
  email: "johndoe",
  password: "MyPassword123",
  deviceId: "web-chrome",
})
```

### Success Response

```json
{
  "message": "johndoe logged successfully",
  "user": {
    "id": "65cbaab84b9d1cce41e98b60",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "profile_picture": {
      "title": "DaykeeperPFP.png",
      "key": "public/DaykeeperPFP.png",
      "url": ""
    },
    "roles": ["user"]
  },
  "accessToken": "<jwt>",
  "refreshToken": "<refresh_token>"
}
```

### Notes

- If credentials are correct but the email is not verified, login is blocked and a new confirmation code is sent automatically.
- Invalid credentials always return the same generic error message.

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid input or missing fields |
| 401  | Incorrect email/username or password |
| 403  | Email not verified |
| 413  | Email, username, or password too long |
| 500  | Server error |

#### Example

```json
{
  "code": "EMAIL_NOT_VERIFIED",
  "message": "Email not verified. A new confirmation code has been sent."
}
```
