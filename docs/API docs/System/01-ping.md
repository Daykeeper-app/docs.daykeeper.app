---
sidebar_position: 1
---

# Ping

### <span style={{color: 'darkgreen'}}>GET</span> `/ping`

#### Description

Simple health endpoint used to verify that the API is running.

### Request Parameters

#### Requires Authentication: <span style={{color: 'darkred'}}>false</span>

## Usage Example

```javascript
await axios.get("https://api.daykeeper.app/ping")
```

### Success Response

```text
PONG
```

### Error Response

This route normally returns `200` when the server is up.
