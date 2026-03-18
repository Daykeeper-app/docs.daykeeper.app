---
sidebar_position: 1
---

# Register

### <span style={{color: 'darkorange'}}>POST</span> `/auth/register`

#### Description

Creates a new local DayKeeper account and sends an email verification code. The user is created with `verified_email: false` until the confirmation step is completed.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

#### BODY

| Name       | Type     | Required | Description                                                        |
| ---------- | -------- | -------- | ------------------------------------------------------------------ |
| `username` | `string` | Yes      | Username for the new account. Lowercase letters, numbers, `.` and `_` only. |
| `email`    | `string` | Yes      | Email address for the account.                                     |
| `password` | `string` | Yes      | Password for local authentication.                                 |
| `timeZone` | `string` | No       | IANA timezone. Defaults to the API default timezone.               |

### Validation Notes

- `username`, `email`, and `password` are required.
- Uppercase usernames are rejected.
- Forbidden usernames such as reserved route names are rejected.
- Duplicate email or username returns `409`.
- Banned emails return `403`.

## Usage Example

```javascript
await axios.post("https://api.daykeeper.app/auth/register", {
  username: "johndoe",
  email: "johndoe@example.com",
  password: "MyPassword1234",
  timeZone: "America/New_York",
})
```

### Success Response

```json
{
  "message": "johndoe created successfully",
  "user": {
    "_id": "65cbaab84b9d1cce41e98b60",
    "username": "johndoe",
    "email": "johndoe@example.com",
    "verified_email": false
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Invalid input or missing required fields |
| 403  | Banned email or forbidden username |
| 409  | Username or email already registered |
| 413  | Username or password too long |
| 500  | Server error |

#### Example

```json
{
  "message": "This username or email has already been registered"
}
```
