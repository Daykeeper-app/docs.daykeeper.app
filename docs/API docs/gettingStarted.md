---
sidebar_position: 1
---

# Getting Started

This guide reflects the current DayKeeper API runtime. The server is built with Node.js, Express, MongoDB sessions, optional Redis workers, and external integrations like AWS, Google auth, and email delivery.

## 1. Clone the API repository

```bash
git clone https://github.com/luciano655dev/daykeeper-api.git
cd daykeeper-api
```

## 2. Install dependencies

```bash
npm install
```

## 3. Create the environment file

Create a `.env` file in the project root.

### Required to boot the API

These values are required by the current server startup:

```env
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<database>
SESSION_SECRET=your-session-secret
PORT=3000
```

### Recommended for local development

These settings help when you run the API with a frontend locally:

```env
NODE_ENV=development
CORS_ORIGINS=http://localhost:3000,http://localhost:3001,http://localhost:3002
CORS_ALLOW_ALL=false
WORKER_ENABLED=false
JOBS_ENABLED=false
```

### App and integration settings

Add these when you need the related features:

```env
SECRET=your-app-secret

EMAIL_SERVICE=
EMAIL_HOST=
EMAIL_PORT=
EMAIL_USER=
EMAIL_PASS=
EMAIL_SECRET=

BUCKET_NAME=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
SNS_TOPIC_ARN=
REKOG_ROLE_ARN=

GIPHY_API_KEY=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_API_KEY=

REDIS_URL=redis://127.0.0.1:6379

CLOUDFRONT_DOMAIN=
CLOUDFRONT_PUBLIC_KEY_ID=
CLOUDFRONT_PRIVATE_KEY_PEM=
CLOUDFRONT_SIGN_TTL_SECONDS=

DEFAULT_PFP_KEY=public/DaykeeperPFP.png
DEFAULT_PFP_URL=
DEFAULT_PFP_TITLE=DaykeeperPFP.png
DAYKEEPER_LOGO_URL=
LEGACY_BUCKET_NAME=daykeeper
```

## 4. Optional services

### Redis

Redis is only needed if you want moderation queues or background workers.

```env
REDIS_URL=redis://127.0.0.1:6379
WORKER_ENABLED=true
JOBS_ENABLED=true
```

If you only want to run the HTTP API locally, leave both flags as `false`.

### Firebase notifications

The project imports `firebase-admin` for push notifications. If you use mobile notifications, configure Firebase Admin credentials in the API runtime before using notification flows.

### AWS media and moderation

AWS credentials are needed for S3-backed media storage and any Rekognition/SNS-based workflows.

### Google auth

Google login requires `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.

### Email flows

Password reset, verification, and moderation email flows require the mail-related environment variables.

## 5. Start the server

For development:

```bash
npm run dev
```

For a normal Node start:

```bash
npm start
```

## 6. Verify the API is running

When the server starts successfully, it listens on the configured port and exposes a health route:

```bash
curl http://localhost:3000/ping
```

Expected response:

```text
PONG
```

## 7. Optional Redis process

If you want to run the queue process separately:

```bash
npm run start:redis
```

## Notes

- The API will fail on startup if `MONGODB_URI` or `SESSION_SECRET` is missing.
- If `CORS_ORIGINS` is empty, the server defaults to allowing `https://daykeeper.app` and `https://www.daykeeper.app`.
- In production, session cookies use secure cross-site settings automatically.
