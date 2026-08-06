import React from "react";
import { Link, useRouteError } from "react-router";
import "./page.css";

const Error = () => {
  const errorVal = useRouteError();

  const status = errorVal?.status ?? 500;
  const statusText = errorVal?.statusText ?? "Unexpected Error";
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const structuredMessage =
    typeof errorVal?.data === "string"
      ? errorVal.data
      : errorVal?.data?.message;
  const message =
    structuredMessage ||
    errorVal?.message ||
    errorVal?.error?.message ||
    "We hit a problem while loading this page. Try going back home and opening it again.";

  return (
    <div className="error-page">
      <div className="error-page__glow error-page__glow--one" />
      <div className="error-page__glow error-page__glow--two" />

      <div className="error-card">
        <p className="error-card__eyebrow">Route unavailable</p>

        <div className="error-card__status-row">
          <span className="error-card__status">{status}</span>
          <span className="error-card__status-text">{statusText}</span>
        </div>

        <h1 className="error-card__title">
          Something went wrong while opening this page.
        </h1>

        <p className="error-card__message">{message}</p>

        <div className="error-card__meta">
          <div>
            <span className="error-card__meta-label">Path</span>
            <span className="error-card__meta-value">{path}</span>
          </div>
          <div>
            <span className="error-card__meta-label">Hint</span>
            <span className="error-card__meta-value">
              Check the URL or head back to the homepage.
            </span>
          </div>
        </div>

        <div className="error-card__actions">
          <Link
            className="error-card__button error-card__button--primary"
            to="/"
          >
            Go home
          </Link>
          <button
            className="error-card__button error-card__button--secondary"
            type="button"
            onClick={() => window.location.reload()}
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;