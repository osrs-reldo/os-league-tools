# ADR 0003: Observability Baseline

- Status: Accepted
- Date: 2026-02-26

## Context

Current observability is minimal (console logs and deprecated frontend analytics). The new stack needs actionable visibility for API health, user behavior, and failures.

## Decision

Adopt a baseline observability stack at project start:

- API logging: `pino` with structured JSON logs and request IDs.
- API tracing/metrics: OpenTelemetry SDK with HTTP + DB spans; export via OTLP.
- API errors: Sentry for exception capture with request/user context.
- Frontend analytics: PostHog events for product telemetry.
- Frontend errors: Sentry browser SDK.

## Consequences

- Faster diagnosis for regressions and deployment issues.
- Supports data-informed improvements for calculators/tracking UX.
- Introduces SDK and environment configuration overhead, but this is mandatory platform work and not optional polish.
