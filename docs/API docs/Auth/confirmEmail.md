---
sidebar_position: 2
---

# Confirm Email

### <span style={{color: 'darkorange'}}>POST</span> `/auth/confirm_email`

#### Description

Confirms a newly registered account using the six-digit verification code sent by email. On success, the API also logs the user in and returns access and refresh tokens.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### BODY

| Name               | Type     | Required | Description |
| ------------------ | -------- | -------- | ----------- |
| `email`            | `string` | Yes      | Account email. |
| `verificationCode` | `string` | Yes      | Six-digit email verification code. |
| `deviceId`         | `string` | No       | Optional device identifier stored with the refresh token. |

## Usage Example

```javascript
await axios.post("https://api.daykeeper.app/auth/confirm_email", {
  email: "johndoe@example.com",
  verificationCode: "123456",
  deviceId: "iphone-15-pro",
})
```

### Success Response

```json
{
  "message": "johndoe's email confirmed successfully",
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

- If the email is already confirmed, the API still returns success and issues tokens.
- If the wrong code is sent, the stored verification code is cleared and a new one must be requested.

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Missing email or code |
| 401  | Invalid verification code |
| 403  | Expired code or unavailable account |
| 404  | User not found |
| 500  | Server error |

#### Example

```json
{
  "message": "Enter a valid Verification code"
}
```
