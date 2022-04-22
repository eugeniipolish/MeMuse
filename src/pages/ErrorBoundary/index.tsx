import React from "react";
import style from "./ErrorBoundary.module.scss";

export class ErrorBoundary extends React.Component<
  unknown,
  { hasError: boolean }
> {
  constructor(props: unknown) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={style.container}>
          <h1>Error</h1>
          <p className={style.message}>Something went wrong</p>
        </div>
      );
    }

    return this.props.children;
  }
}
