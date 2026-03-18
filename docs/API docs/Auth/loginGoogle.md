---
sidebar_position: 4
---

# Login/Register Google

### <span style={{color: 'green'}}>GET</span> `/auth/google`

#### Description

Starts the Google OAuth flow. This endpoint redirects the user to Google for authentication.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

No request body is required.

## Usage Example

Open this URL in a browser:

```text
https://api.daykeeper.app/auth/google
```

### Callback

After Google authentication succeeds, the API handles the callback at:

```text
/auth/google/callback
```

The callback returns:

```json
{
  "message": "Google login success",
  "accessToken": "<jwt>",
  "refreshToken": "<refresh_token>"
}
```

### Notes

- If the Google account does not exist yet, the API creates a new verified user automatically.
- Existing users can be linked by matching email or `google_id`.
- This is a browser redirect flow, not a JSON `POST` login route.

### Error Response

| Code | Description |
| ---- | ----------- |
| 302/redirect | Redirect to Google login |
| 500 | Server error during OAuth flow |
