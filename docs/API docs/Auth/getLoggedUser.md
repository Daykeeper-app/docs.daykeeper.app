---
sidebar_position: 9
---

# Get Logged User

### <span style={{color: 'green'}}>GET</span> `/auth/user`

#### Description

Returns the current authenticated user's basic account data.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

Send a valid bearer token in the `Authorization` header.

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/auth/user", {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
})
```

### Success Response

```json
{
  "message": "User data",
  "user": {
    "_id": "65cbaab84b9d1cce41e98b60",
    "username": "johndoe",
    "displayName": "John Doe",
    "email": "johndoe@example.com",
    "profile_picture": {
      "title": "DaykeeperPFP.png",
      "key": "public/DaykeeperPFP.png",
      "url": ""
    },
    "roles": ["user"],
    "verified_email": true,
    "timeZone": "America/New_York",
    "private": false
  }
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 401  | Missing, invalid, or expired token |
| 404  | User not found |
| 500  | Server error |
