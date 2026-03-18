---
sidebar_position: 3
---

# Reset Profile Picture

### <span style={{color: 'darkblue'}}>PUT</span> `/reset_profile_picture`

#### Description

Resets the authenticated user's profile picture back to the default DayKeeper profile image.

### Request Parameters

#### Requires Authentication: <span style={{color: 'green'}}>true</span>

## Usage Example

```javascript
await axios.put(
  "https://api.daykeeper.app/reset_profile_picture",
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
  "message": "johndoe's profile picture reseted successfully"
}
```

### Error Response

| Code | Description |
| ---- | ----------- |
| 400  | Profile picture is already the default |
| 401  | Missing or invalid access token |
| 500  | Server error |
